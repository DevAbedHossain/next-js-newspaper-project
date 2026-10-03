import { MostReadNews } from "@/lib/AllApi";
import { INewsData } from "@/typs/AllTypes";
import Link from "next/link";


const SidbarItems = async () => {

    const sideNews: INewsData[] = await MostReadNews();
    console.log(sideNews)

    return (
        <div className="p-5 border border-gray-200 rounded-2xl sticky top-0">
            <h3 className="text-xl font-semibold py-4">সর্বাধিক পঠিত</h3>
            {
                sideNews.map((item: INewsData, ind: number) => <Link key={ind} href={`/article/${item.id}`}><h4 className="flex gap-2 py-2 text-[16px] font-medium hover:text-[#c10007]"><span>{ind + 1}.</span> {item.title}</h4></Link>)
            }
        </div>
    );
};

export default SidbarItems;