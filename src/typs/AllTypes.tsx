export interface INavItems {
    title: string
    scrapable: boolean
    slug: string
    url: string
    topicaId: string | null
}

export interface INewsData {
    id: string
    title: string
    description: string
    link: string
    imageUrl: string
    imageAlt: string
    category: string
    type: string
    isLive: boolean
    firstPublished: string
    lastPublished: string
    source: string
}
