"use client";

import { signIn } from '@/lib/auth-client';
import React from 'react';

const SignInPage = () => {

    const handleSignIn = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const resData = Object.fromEntries(formData.entries()) as { email: string, password: string };

        const { data, error } = await signIn.email({
            email: resData.email,
            password: resData.password,
            callbackURL: "/",
        })

        console.log("after submit", data, error)
    }

    return (
        <div className="flex flex-col gap-3 items-center my-5">
            <h2 className="text-2xl text-[#c10007] font-bold">সাইন ইন</h2>
            <form onSubmit={handleSignIn}>
                <fieldset className="fieldset  w-md  p-4">

                    <label className="label text-[16px] font-medium text-black">ইমেইল</label>
                    <input type="email" name="email" className="input outline-none w-full focus:border-red-700" placeholder="Email" />

                    <label className="label text-[16px] font-medium text-black">পাসওয়ার্ড</label>
                    <input type="password" name="password" className="input outline-none w-full focus:border-red-700" placeholder="Password" />

                    <button type="submit" className="btn bg-[#c10007] text-white mt-4">সাইন ইন করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;