import { Box } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import React from 'react';
import Typography from '@mui/material/Typography';

export const EmptyState: React.FC = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<ErrorIcon sx={{ color: 'red', fontSize: '4.5rem', mr: '20px' }} />
			<Typography variant="h2" sx={{ color: 'red' }}>
				NO POSTS
			</Typography>
		</Box>
	);
};
