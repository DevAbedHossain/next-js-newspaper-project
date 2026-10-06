"use client";

import { requestPasswordReset } from "@/lib/auth-client";
import React from "react";

const ForgotPasswordPage = () => {

    const handleForgotPassword = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const resData = Object.fromEntries(formData.entries()) as { email: string };

        const { data, error } = await requestPasswordReset({
            email: resData.email,
            redirectTo: "/reset-password",
        });
        console.log("after submition", data, error);
    }

    return (
        <div className="flex flex-col gap-3 items-center my-5">
            <h2 className="text-2xl text-[#c10007] font-bold">Forget Password</h2>
            <form onSubmit={handleForgotPassword}>
                <fieldset className="fieldset  w-md  p-4">

                    <label className="label text-[16px] font-medium text-black">ইমেইল</label>
                    <input type="email" name="email" className="input outline-none w-full focus:border-red-700" placeholder="Email" />

                    <button type="submit" className="btn bg-[#c10007] text-white mt-4">Submit</button>
                </fieldset>
            </form>
        </div>
    );
};

export default ForgotPasswordPage;