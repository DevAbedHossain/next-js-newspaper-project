import { INewsData } from "@/typs/AllTypes";
import Image from "next/image";
import Link from "next/link";


const NewsCard = ({ item }: { item: INewsData }) => {

    const newDate = new Intl.DateTimeFormat("bn-bd", {
        dateStyle: "full",
        timeStyle: "medium",
        timeZone: "Asia/Dhaka",
    }).format(new Date(item.lastPublished));

    return (
        <div>
            <Link href={`/article/${item.id}`}>
                <div className="card bg-base-100 shadow-sm h-full">
                    <figure>
                        <Image className="w-full h-66 object-cover" src={item.imageUrl} alt={item.title} width={500} height={500} />
                    </figure>
                    <div className="card-body">
                        <span className="text-[#c10007]">{item.category}</span>
                        <h2 className="card-title hover:text-[#c10007] line-clamp-2">{item.title}</h2>
                        <p className="line-clamp-3">{item.description}</p>
                        <span className="pt-2 border-t border-gray-200">{newDate}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default NewsCard;