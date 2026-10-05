import NotFoundPage from "@/app/not-found";
import { SingleNews } from "@/lib/AllApi";
import Image from "next/image";
import { notFound } from "next/navigation";


const NewsDetailsPage = async ({ params }: { params: Promise<{ newsId: string }> }) => {

    const { newsId } = await params;
    console.log(newsId);

    const item = await SingleNews({ slug: newsId });
    console.log("single Item", item);

    if (item === undefined) {
        notFound();
    }

    const date = new Intl.DateTimeFormat("bn-bd", {
        dateStyle: "full",
        timeStyle: "medium",
        timeZone: "Asia/Dhaka",
    }).format(new Date(item.lastPublished | item.firstPublished));



    return (
        <div>
            <h2 className="text-3xl font-bold pt-5">{item.title}</h2>
            <span>{date}</span>
            <Image className="rounded-2xl pt-5" src={item.imageUrl} height={700} width={700} alt={item.title}></Image>
            <p className="text-[16px] py-5">{item.text}</p>
            <div className="flex gap-5">
                {
                    item.tags.map((tag: string, ind: number) => <span className="pt-2 px-5 rounded-full bg-gray-200 " key={ind}>{tag}</span>)
                }
            </div>
        </div>
    );
};

export default NewsDetailsPage;