import { TextField } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { useDebounce } from 'react-use';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import { setSearch } from '../store/articles/articlesSlice.ts';

export const Search: React.FC = () => {
	const dispatch = useAppDispatch();
	const search = useAppSelector(state => state.articles.search);
	const [inputValue, setInputValue] = useState('');

	const loading = useAppSelector((state) => state.articles.loading);

	useDebounce(
		() => {
			if (inputValue || inputValue !== search || inputValue.length > 2) {
				dispatch(setSearch(inputValue));
			}
		},
		500,
		[inputValue]
	);

	return (
		<TextField
			size="small"
			label="Search"
			variant="outlined"
			value={inputValue}
			onChange={(e) => setInputValue(e.target.value)}
			disabled={loading}
		/>
	);
};
