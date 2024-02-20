import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts } from '../../services/http/posts.ts';
import { ArticleType } from '../../types.ts';

export const getAllPosts = createAsyncThunk(
	'articles/getPosts',
	async ({
		search,
		page
	}: {
		search: string;
		page: number;
	}): Promise<{ totalResults: number; articles: ArticleType[] }> => {
		const response = await getPosts(search, page);

		return {
			totalResults: response.data.totalResults,
			articles: response.data.articles.map(
				({ author, title, publishedAt, description, urlToImage, url }) => ({
					id: `${author}${publishedAt}`,
					author,
					title,
					publishedAt,
					description,
					urlToImage,
					url,
					createdByUser: false
				})
			)
		};
	}
);
