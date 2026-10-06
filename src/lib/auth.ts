import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { Resend } from 'resend';

const mongoUrl = process.env.MONGO_DB_URL;
if (!mongoUrl) {
    throw new Error("MONGO_DB_URL environment variable is required");
}

const client = new MongoClient(mongoUrl);
const db = client.db("news_24_user");
const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
    user: {
        changeEmail: {
            enabled: true,
            sendChangeEmailConfirmation: async ({ user, newEmail, url, token }, request) => {
                void resend.emails.send({
                    from: 'Acme <onboarding@resend.dev>',
                    to: user.email,
                    subject: 'Approve email change',
                    text: `Click the link to approve the change to ${newEmail}: ${url}`
                })
            }
        }
    },
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
        revokeSessionsOnPasswordReset: true,
        sendResetPassword: async ({ user, url, token }, request) => {
            void resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: user.email,
                subject: 'Reset your password',
                html: `Click <a href="${url}">here</a> to reset your password.`,
            })
        },
    },
    emailVerification: {
        sendVerificationEmail: async ({ user, url }) => {
            void resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: user.email,
                subject: 'Verify your email address',
                html: `Click <a href="${url}">here</a> to verify your email.`,
            })
        },
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        expiresIn: 7 * 24 * 3600 // 7 days,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SICRET as string,
        }
    },
    database: mongodbAdapter(db, {
        client,
    }),
});