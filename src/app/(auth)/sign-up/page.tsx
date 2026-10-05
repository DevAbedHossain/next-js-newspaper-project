"use client";

import { signUp } from "@/lib/auth-client";
import React from "react";

const SignUpPage = () => {

    const handleSignUp = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const resData = Object.fromEntries(formData.entries()) as { name: string, image: string, email: string, password: string };

        const { data, error } = await signUp.email({
            name: resData.name,
            email: resData.email,
            password: resData.password,
            image: resData.image,
            callbackURL: "/"
        });
        console.log("After submit data", data, error)
    };

    return (
        <div className="flex flex-col gap-3 items-center my-5">
            <h2 className="text-2xl text-[#c10007] font-bold">সাইন আপ</h2>
            <form onSubmit={handleSignUp}>
                <fieldset className="fieldset  w-md  p-4">

                    <label className="label text-[16px] font-medium text-black ">নাম</label>
                    <input type="text" name="name" className="input outline-none w-full focus:border-red-700 " placeholder="Name" />

                    <label className="label text-[16px] font-medium text-black">ছবি</label>
                    <input type="url" name="image" className="input outline-none w-full focus:border-red-700" placeholder="Image" />

                    <label className="label text-[16px] font-medium text-black">ইমেইল</label>
                    <input type="email" name="email" className="input outline-none w-full focus:border-red-700" placeholder="Email" />

                    <label className="label text-[16px] font-medium text-black">পাসওয়ার্ড</label>
                    <input type="password" name="password" className="input outline-none w-full focus:border-red-700" placeholder="Password" />

                    <button type="submit" className="btn bg-[#c10007] text-white mt-4">সাইন আপ করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;

