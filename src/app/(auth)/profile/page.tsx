"use client";

import { useSession } from "@/lib/auth-client";
import Link from "next/link";

const ProfilePage = () => {
    const { data: session } = useSession();

    return (
        <div className="min-h-[80vh] px-4 py-10">
            <div className="mx-auto max-w-3xl">
                {/* Profile Header */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="flex flex-col items-center gap-5 sm:flex-row">
                            {/* Profile Image */}
                            <div className="avatar">
                                <div className="w-28 rounded-full ring-4 ring-primary ring-offset-4 ring-offset-base-100">
                                    <img
                                        src={session?.user.image ?? undefined}
                                        alt={session?.user.name}
                                    />
                                </div>
                            </div>

                            {/* User Info */}
                            <div className="text-center sm:text-left">
                                <h1 className="text-3xl font-bold">{session?.user.name} </h1>

                                <p className="mt-1 text-base-content/60">{session?.user.email} </p>

                                <div className="badge badge-primary mt-3">Member</div>
                            </div>
                        </div>

                        <div className="divider"></div>

                        {/* Account Information */}
                        <h2 className="mb-4 text-xl font-bold">
                            Account Information
                        </h2>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {/* Name */}
                            <div className="rounded-lg border border-base-300 bg-base-200 p-4">
                                <p className="text-sm text-base-content/60">Full Name</p>
                                <p className="mt-1 font-semibold">{session?.user.name}</p>
                            </div>

                            {/* Email */}
                            <div className="rounded-lg border border-base-300 bg-base-200 p-4">
                                <p className="text-sm text-base-content/60">
                                    Email Address
                                </p>
                                <p className="mt-1 break-all font-semibold">{session?.user.email}</p>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="mt-4 rounded-lg border border-base-300 bg-base-200 p-4">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm text-base-content/60">Password</p>

                                    <p className="mt-1 font-semibold tracking-widest">••••••••••</p>
                                </div>

                                <Link href="/change-password"><button className="btn btn-outline btn-sm">Change Password</button></Link>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-6 flex justify-end gap-3">
                            <Link href="/update-profile"><button className="btn btn-outline"> Edit Profile</button></Link>
                            <Link href="/change-email"><button className="btn btn-outline">Change Email</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
