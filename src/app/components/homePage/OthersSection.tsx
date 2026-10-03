import { AllHomeNews } from "@/lib/AllApi";
import NewsCard from "../shared/NewsCard";
import NewsCartTwo from "../shared/NewsCartTwo";
import { INewsData } from "@/typs/AllTypes";


const OthersSection = async () => {

    const allData = await AllHomeNews();
    const othersHero = allData.slice(1);


    return (
        <div>
            {
                othersHero.map((item: INewsData & { curationId: string; articles: INewsData[] }) => <div key={item.curationId}>
                    <h3 className="text-xl font-bold py-3 border-b-2 border-[#c10007] my-5">{item.title}</h3>
                    <div className="grid grid-cols-3 gap-4 items-stretch">
                        {
                            item.articles.map((newItem: INewsData) => <NewsCard key={newItem.id} item={newItem} />)
                        }
                    </div>
                </div>)
            }
        </div>

    );
};

export default OthersSection;