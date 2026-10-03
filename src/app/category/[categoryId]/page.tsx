import NewsCard from "@/app/components/shared/NewsCard";
import { CategoryNewsItem } from "@/lib/AllApi";
import { INewsData } from "@/typs/AllTypes";

const CategoryNews = async ({ params }: { params: { categoryId: string } }) => {

    const { categoryId } = await params;
    console.log("category Id", categoryId);

    const categoryItems = await CategoryNewsItem({ slug: categoryId });
    const items = categoryItems.data;
    console.log(categoryItems)

    return (
        <div>
            <h2 className="py-1 border-b-2 border-[#c10007] mb-8 text-2xl font-bold">{categoryItems.title}</h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    items.map((item: INewsData) => <NewsCard key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default CategoryNews;