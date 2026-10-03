import { NavCatItems } from "@/lib/AllApi";
import { INavItems } from "@/typs/AllTypes";
import Link from "next/link";

const NavItems = async () => {

    const navCatItems: INavItems[] = await NavCatItems();

    return (
        <div className="container mx-auto flex gap-5 items-center justify-center">
            <Link href="/">হোম</Link>
            {
                navCatItems.map((item: INavItems, ind: number) => item.scrapable && <Link className="hover:text-[#c10007] text-[16px]" href={`/category/${item.slug}`} key={ind}>{item.title}</Link>)
            }
        </div>
    );
};

export default NavItems;