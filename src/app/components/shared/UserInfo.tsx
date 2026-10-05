"use client";

import { signOut, useSession } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useCallback } from 'react';


const UserInfo = () => {

    const { data: session } = useSession();
    console.log(session)

    const handleSignOut = () => {
        signOut();

        redirect("/")
    };

    return (
        <>
            {
                session?.user ? <>
                    <Link href="/profile">
                        <div className="avatar space-x-3 items-center">
                            <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring-2 ring-offset-2">
                                <img alt="Tailwind-CSS-Avatar-component" src={session?.user?.image ?? undefined} />
                            </div>
                            <h6>{session?.user.name}</h6>
                        </div>
                    </Link>
                    <button onClick={handleSignOut} className="btn bg-[#c10007] text-white rounded">সাইন আউট</button>
                </> : <>
                    <Link href="/sign-in">সাইন ইন</Link>
                    <Link href="/sign-up"><button className="btn bg-[#c10007] text-white rounded">সাইন আপ</button></Link>
                </>
            }
        </>
    );
};

export default UserInfo;