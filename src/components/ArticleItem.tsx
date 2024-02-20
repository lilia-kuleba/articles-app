import React, { useMemo, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import { ConfirmActionModal } from './ConfirmActionModal.tsx';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { ArticleType } from '../types';
import { deleteUserArticle, togglePinnedArticle } from '../store/articles/articlesSlice.ts';
// eslint-disable-next-line import/no-unresolved
import placeholderImg from '/placeholder.png';

export const ArticleItem: React.FC<{ post: ArticleType }> = ({ post }) => {
	const { id, title, description, url, author, urlToImage, createdByUser } = post;
	const dispatch = useAppDispatch();
	const pinnedPost = useAppSelector((state) => state.articles.pinnedArticle);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);

	const onDeleteModalOpen = () => setOpenDeleteModal(true);
	const onDeleteModalClose = () => setOpenDeleteModal(false);
	const onDeletePost = async () => {
		dispatch(deleteUserArticle(id));
	};
	const openLink = () => {
		window.open(url, '_blank', 'noreferrer');
	};
	const togglePinPost = () => {
		dispatch(togglePinnedArticle(pinnedPost?.url === url ? null : post));
	};

	const authorAvatar = useMemo(() => {
		const [firstName, lastName] = (author || 'Author unknown').split(' ');

		return firstName[0].toUpperCase() + (lastName || ' ')[0].toUpperCase();
	}, [author]);

	return (
		<>
			<ArticleCard>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: '#d32f2f' }} aria-label="recipe">
							{authorAvatar}
						</Avatar>
					}
					title={title}
					subheader={author || 'Author unknown'}
					sx={{
						'.MuiCardHeader-title': {
							textOverflow: 'ellipsis',
							width: 380,
							height: 40,
							overflow: 'hidden',
							textWrap: 'balance'
						}
					}}
				/>
				<CardMedia
					component="img"
					height="250"
					image={urlToImage || placeholderImg}
					alt="Paella dish"
				/>
				<CardContent sx={{ maxWidth: 500 }}>
					<Typography variant="body2" color="text.secondary">
						{description || 'No short description. Click button below to see more'}
					</Typography>
				</CardContent>
				<CardActions disableSpacing sx={{ alignSelf: 'self-start', marginTop: 'auto' }}>
					<IconButton onClick={togglePinPost} title="Pin article">
						{pinnedPost?.id === id ? (
							<BookmarkIcon />
						) : (
							<BookmarkBorderIcon fontSize="medium" />
						)}
					</IconButton>
					{!createdByUser && (
						<IconButton onClick={openLink} title="Read full article">
							<ReadMoreIcon fontSize="small" />
						</IconButton>
					)}
					{createdByUser && (
						<IconButton onClick={onDeleteModalOpen} title="Read full article">
							<DeleteIcon fontSize="medium" />
						</IconButton>
					)}
				</CardActions>
			</ArticleCard>
			<ConfirmActionModal
				title="Are you sure you want to delete the post?"
				subtitle="This action can't be undone"
				open={openDeleteModal}
				onClose={onDeleteModalClose}
				onConfirm={onDeletePost}
			/>
		</>
	);
};

export const ArticleCard = styled(Card)`
	width: 450px;
	min-width: 400px;
	display: flex;
	flex-direction: column;
	box-shadow:
		0 2px 4px -1px rgba(0, 0, 0, 0.2),
		0 4px 5px 0 rgba(0, 0, 0, 0.14),
		0 1px 10px 0 rgba(0, 0, 0, 0);
`;
