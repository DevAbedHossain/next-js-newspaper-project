"use client";

import { changePassword } from '@/lib/auth-client';
import React from 'react';

const ChangePasswordPage = () => {

    const handleChangePassword = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const resData = Object.fromEntries(formData.entries()) as { oldPassword: string, newPassword: string };

        const { data, error } = await changePassword({
            currentPassword: resData.oldPassword,
            newPassword: resData.newPassword,
            revokeOtherSessions: true,
        });
        console.log("after submition", data, error);
    }

    return (
        <div className="flex flex-col gap-3 items-center my-5">
            <h2 className="text-2xl text-[#c10007] font-bold">Reset Password</h2>
            <form onSubmit={handleChangePassword}>
                <fieldset className="fieldset  w-md  p-4">

                    <label className="label text-[16px] font-medium text-black">Current Password</label>
                    <input type="password" name="oldPassword" className="input outline-none w-full focus:border-red-700" placeholder="Password" />

                    <label className="label text-[16px] font-medium text-black">New Password</label>
                    <input type="password" name="newPassword" className="input outline-none w-full focus:border-red-700" placeholder="Password" />

                    <button type="submit" className="btn bg-[#c10007] text-white mt-4">Submit</button>
                </fieldset>
            </form>
        </div>
    );
};

export default ChangePasswordPage;