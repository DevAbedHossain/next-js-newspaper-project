import { AllHomeNews } from "@/lib/AllApi";
import NewsCard from "../shared/NewsCard";
import NewsCartTwo from "../shared/NewsCartTwo";


const HeroSection = async () => {

    const allData = await AllHomeNews();
    const heroData = allData[0];
    const firstItem = heroData.articles[0];
    const othersItem = heroData.articles.slice(1, 6)


    return (
        <div>
            <div className="grid grid-cols-2 gap-5">
                <NewsCard item={firstItem} />
                <NewsCartTwo items={othersItem} />
            </div>

        </div>

    );
};

export default HeroSection;