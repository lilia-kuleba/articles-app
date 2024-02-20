import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from './articles/articlesSlice.ts';

export const store = configureStore({
	reducer: {
		articles: articlesSlice
	}
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {articles: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
