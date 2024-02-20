import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { MuiFileInput } from 'mui-file-input';
import Card from '@mui/material/Card';
import ClearIcon from '@mui/icons-material/Clear';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { ConfirmActionModal } from './ConfirmActionModal.tsx';
import { ArticleType } from '../types.ts';
import { useAppDispatch } from '../store/hooks.ts';
import { addArticle } from '../store/articles/articlesSlice.ts';

export const CreateArticle: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [image, setImage] = useState<File | null>(null);
	const [imageSource, setImageSource] = useState<string | null>(null);
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [description, setDescription] = useState('');
	const [openCancelModal, setOpenCancelModal] = useState(false);

	const returnHome = () => navigate('/');
	const createArticle = async () => {
		const publishedAt = new Date().toISOString();

		const newPost: ArticleType = {
			id: uuidv4(),
			title,
			author,
			description,
			publishedAt,
			url: '',
			urlToImage: imageSource as string,
			createdByUser: true
		};

		dispatch(addArticle(newPost));
		navigate('/');
	};

	const handleChange = async (newValue: File | null) => {
		setImage(newValue);
	};

	const onCancel = () => {
		if (title || description || image || author) {
			setOpenCancelModal(true);
		} else {
			returnHome();
		}
	};

	useEffect(() => {
		if (image) {
			const reader = new FileReader();
			reader.readAsDataURL(image as File);
			reader.addEventListener('load', () => {
				setImageSource(reader.result as string);
			});
		} else {
			setImageSource(null);
		}
	}, [image]);

	return (
		<>
			<CreatePostBox>
				<Typography variant="h3">Create an article</Typography>
				{imageSource && <img src={imageSource} alt="articleImg" />}
				<MuiFileInput
					placeholder="Add an image for the article"
					value={image}
					onChange={handleChange}
					InputProps={{
						inputProps: {
							accept: '.png, .jpeg'
						},
						startAdornment: <AttachFileIcon />
					}}
					clearIconButtonProps={{
						title: 'Remove',
						children: <ClearIcon fontSize="small" />
					}}
				/>
				<TextField
					id="outlined-multiline-flexible"
					label="Title"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<TextField
					id="outlined-multiline-flexible"
					label="Author"
					value={author}
					onChange={(event) => setAuthor(event.target.value)}
				/>
				<TextField
					id="outlined-multiline-static"
					label="Description"
					multiline
					rows={4}
					value={description}
					onChange={(event) => setDescription(event.target.value)}
				/>
				<Box sx={{ display: 'flex', justifyContent: 'end', gap: '10px' }}>
					<Button
						onClick={createArticle}
						variant="outlined"
						disabled={!title || !description || !image || !description}
					>
						Create
					</Button>
					<Button variant="contained" color="error" onClick={onCancel}>
						Cancel
					</Button>
				</Box>
			</CreatePostBox>
			<ConfirmActionModal
				title="Are you sure you want to cancel post creating"
				subtitle="This action can\'t be undone"
				open={openCancelModal}
				onClose={() => setOpenCancelModal(false)}
				onConfirm={returnHome}
			/>
		</>
	);
};

const CreatePostBox = styled(Card)`
	display: flex;
	padding: 16px;
	flex-direction: column;
	width: 400px;
	margin: 25px auto;
	background-color: #fff;
	box-shadow:
		0 2px 4px -1px rgba(0, 0, 0, 0.2),
		0 4px 5px 0 rgba(0, 0, 0, 0.14),
		0 1px 10px 0 rgba(0, 0, 0, 0);
	border-radius: 4px;
	gap: 15px;
`;
