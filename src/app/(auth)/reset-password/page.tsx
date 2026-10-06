"use client";

import { resetPassword } from '@/lib/auth-client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const ResetPasswordPage = () => {

    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const handleResetPassword = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const resData = Object.fromEntries(formData.entries()) as { password: string };

        const { data, error } = await resetPassword({
            newPassword: resData.password,
            token: token ?? undefined,
        })
        console.log("after submition", data, error);
    }

    return (
        <div className="flex flex-col gap-3 items-center my-5">
            <h2 className="text-2xl text-[#c10007] font-bold">Reset Password</h2>
            <form onSubmit={handleResetPassword}>
                <fieldset className="fieldset  w-md  p-4">

                    <label className="label text-[16px] font-medium text-black">পাসওয়ার্ড</label>
                    <input type="password" name="password" className="input outline-none w-full focus:border-red-700" placeholder="Password" />

                    <button type="submit" className="btn bg-[#c10007] text-white mt-4">Submit</button>
                </fieldset>
            </form>
        </div>
    );
};

export default ResetPasswordPage;