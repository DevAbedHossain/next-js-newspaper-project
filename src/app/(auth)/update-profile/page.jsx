"use client";

import { updateUser } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const UpdateProfilePage = () => {

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const resData = Object.fromEntries(formData.entries());

        const { data, error } = await updateUser({
            name: resData.name,
            image: resData.image,
            redirect: "/profile"
        })
        console.log("after submition", data, error)
    }

    return (
        <div className="flex flex-col gap-3 items-center my-5">
            <h2 className="text-2xl text-[#c10007] font-bold">প্রোফাইল আপডেট</h2>
            <form onSubmit={handleUpdateProfile}>
                <fieldset className="fieldset  w-md  p-4">

                    <label className="label text-[16px] font-medium text-black ">নাম</label>
                    <input type="text" name="name" className="input outline-none w-full focus:border-red-700 " placeholder="Name" />

                    <label className="label text-[16px] font-medium text-black">ছবি</label>
                    <input type="url" name="image" className="input outline-none w-full focus:border-red-700" placeholder="Image" />

                    <button type="submit" className="btn bg-[#c10007] text-white mt-4">প্রোফাইল আপডেট করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default UpdateProfilePage;