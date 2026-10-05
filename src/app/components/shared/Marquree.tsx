import { MarqureeNews } from "@/lib/AllApi";
import { INewsData } from "@/typs/AllTypes";
import Link from "next/link";
import Marquee from "react-fast-marquee";


const Marquree = async () => {

    const marqureeTitles: INewsData[] = await MarqureeNews();

    return (
        <div className="bg-[#c10007] text-white my-3">
            <div className="flex container mx-auto">
                <h4 className="bg-[#9c0409] p-2">সর্বশেষ</h4>
                <Marquee className="flex gap-3 py-2" speed={100}>
                    {
                        marqureeTitles.map((title: INewsData) => <Link href={`/article/${title.id}`} key={title.id} className="hover:underline">{title.title} <span className="px-2">•</span> </Link>)
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default Marquree;