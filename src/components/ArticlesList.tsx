import * as React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import { ArticleItem } from './ArticleItem.tsx';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { EmptyState } from './EmptyState';
import { getAllPosts } from '../store/articles/thunks.ts';
import { LoadMoreCard } from './LoadMoreCard.tsx';
import { setPage } from "../store/articles/articlesSlice.ts";

export const ArticlesList: React.FC = () => {
	const dispatch = useAppDispatch();
	const { articles, loading, shouldUpdate, search, pinnedArticle, page } = useAppSelector(
		(state) => state.articles
	);
	const articlesList = useMemo(
		() => [...(pinnedArticle ? [pinnedArticle] : []), ...articles],
		[articles, pinnedArticle]
	);

	const fetchPosts = () => {
		dispatch(getAllPosts({ search, page }));
	};

	useEffect(fetchPosts, [search, page, shouldUpdate]);

	useEffect(() => {
		return () => {
			dispatch(setPage(1));
		}
	}, []);

	return (
		<Articles>
			{!articlesList.length && loading && <CircularProgress />}
			{!!articlesList.length && (
				<>
					{articlesList.map((post) => (
						<ArticleItem key={post.publishedAt} post={post} />
					))}
					<LoadMoreCard />
				</>
			)}
			{!articlesList.length && !loading && <EmptyState />}
		</Articles>
	);
};

const Articles = styled(Box)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 16px;
	margin-top: 16px;
	padding: 0 16px 16px;
`;
