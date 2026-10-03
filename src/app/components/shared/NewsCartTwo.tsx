import { INewsData } from "@/typs/AllTypes";
import Link from "next/link";


const NewsCartTwo = ({ items }: { items: INewsData[] }) => {
    return (
        <div className="flex flex-col rounded-2xl">
            {
                items.map((item: INewsData) =>
                    <Link key={item.id} href={`/article/${item.id}`}>
                        <div className="py-3 px-5 bg-base-100 border border-gray-100 hover:border-gray-200">
                            <span className="text-[#c10007] text-[16px]">{item.category}</span>
                            <h4 className="text-lg font-medium">{item.title}</h4>
                        </div>
                    </Link>
                )
            }
        </div>
    );
};

export default NewsCartTwo;