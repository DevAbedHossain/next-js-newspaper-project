import Image from "next/image";
import Link from "next/link";
import Logo from "@/acess/logo.webp"
import NavItems from "./NavItems";
import Marquree from "./Marquree";


const Navbar = () => {

    const date = new Date().toLocaleDateString("bn-bd", {
        dateStyle: "full",
    })

    return (
        <div>
            <div className="container mx-auto py-3 flex gap-3 justify-center relative">
                <div className="flex gap-3 justify-center">
                    <Link href="/" className="flex gap-2 items-center">
                        <Image className="object-cover w-12" src={Logo} width={50} height={50} alt=""></Image>
                        <div>
                            <h2 className="text-[#c10007] text-2xl font-bold">Bangla News 24</h2>
                            <span>{date}</span>
                        </div>
                    </Link>
                    <div className="flex gap-3 items-center justify-end absolute top-6 right-0">
                        <Link href="">সাইন ইন</Link>
                        <Link href=""><button className="btn bg-[#c10007] text-white rounded">সাইন আপ</button></Link>
                    </div>
                </div>
            </div>
            <NavItems />
            <Marquree />
        </div>
    );
};

export default Navbar;