export const NavCatItems = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data = await res.json();
    return data.data;
}

export const MarqureeNews = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
    const data = await res.json();
    return data.data;
}

export const AllHomeNews = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
    const data = await res.json();
    return data.data;
}

export const MostReadNews = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await res.json();
    return data.data;
}

export const CategoryNewsItem = async ({ slug }: { slug: string }) => {
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${slug}`);
    const data = await res.json();
    return data;
}

export const SingleNews = async ({ slug }: { slug: string }) => {
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${slug}`);
    const data = await res.json();
    return data.data;
}