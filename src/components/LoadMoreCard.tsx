import React from 'react';
import IconButton from '@mui/material/IconButton';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { ArticleCard } from './ArticleItem.tsx';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import { setPage } from '../store/articles/articlesSlice.ts';

export const LoadMoreCard: React.FC = () => {
	const dispatch = useAppDispatch();
	const { totalResults, page } = useAppSelector((state) => state.articles);

	const loadMoreArticles = () => {
		dispatch(setPage(page + 1));
	};

	if (totalResults / 10 < page) {
		return null;
	}

	return (
		<ArticleCard sx={{ justifyContent: 'center', alignItems: 'center' }}>
			<IconButton
				onClick={loadMoreArticles}
				sx={{ width: 'max-content' }}
				title="Load more articles"
			>
				<RestartAltIcon sx={{ fontSize: '340px' }} />
			</IconButton>
		</ArticleCard>
	);
};
