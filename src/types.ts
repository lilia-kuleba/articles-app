export type ArticleType = {
	id: string
	author: string;
	title: string;
	description: string;
	publishedAt?: string;
	urlToImage: string;
	url: string;
	createdByUser: boolean
};

export type PostsReturnType = {
	ok: boolean;
	articles: ArticleType[];
	totalResults: number;
}
