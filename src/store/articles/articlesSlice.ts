import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleType } from '../../types';
import { getAllPosts } from './thunks.ts';

export type PostState = {
	articles: ArticleType[];
	pinnedArticle: ArticleType | null;
	loading: boolean;
	search: string;
	totalResults: number;
	page: number;
};

const initialState: PostState = {
	articles: [],
	pinnedArticle: null,
	loading: true,
	totalResults: 0,
	search: '',
	page: 1
};

export const articlesSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addArticle: (state, action: PayloadAction<ArticleType>) => {
			state.articles = [action.payload, ...state.articles];
		},
		deleteUserArticle: (state, action: PayloadAction<string>) => {
			state.articles = state.articles.filter(({ id }) => id !== action.payload);
		},
		togglePinnedArticle: (state, action: PayloadAction<ArticleType | null>) => {
			if (action.payload) {
				state.articles = state.articles.filter(({ url }) => action.payload?.url !== url);
			} else if (state.pinnedArticle && !state.search) {
				state.articles = [state.pinnedArticle, ...state.articles];
			}

			state.pinnedArticle = action.payload;
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
			state.page = 1;
			state.articles = state.articles.filter(({ id }) => id === state.pinnedArticle?.id);
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getAllPosts.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(
			getAllPosts.fulfilled,
			(state, action: PayloadAction<{ totalResults: number; articles: ArticleType[] }>) => {
				const urls = state.articles.map(({ url }) => url);

				state.totalResults = action.payload.totalResults;
				state.articles = [
					...state.articles,
					...action.payload.articles.filter(
						({ id, url }) => id !== state.pinnedArticle?.id && !urls.includes(url)
					)
				];
				state.loading = false;
			}
		);
	}
});

export const { setSearch, togglePinnedArticle, addArticle, deleteUserArticle, setPage } =
	articlesSlice.actions;

export default articlesSlice.reducer;
