import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 2,
	borderRadius: '4px'
};

type DeleteModalProps = {
	open: boolean;
	onClose: () => void;
	onDelete: () => void;
};
export const DeleteModal: React.FC<DeleteModalProps> = ({ open, onClose, onDelete }) => (
	<Modal open={open} onClose={onClose}>
		<Box sx={style}>
			<Typography id="modal-modal-title" variant="h6" component="h2">
				Are you sure you want to delete the post?
			</Typography>
			<Typography id="modal-modal-description" sx={{ mt: 2 }}>
				This action is irreversible
			</Typography>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'end',
					gap: '20px'
				}}
			>
				<Button variant="outlined" onClick={onDelete}>
					Yes
				</Button>
				<Button variant="contained" color="error" onClick={onClose}>
					No
				</Button>
			</Box>
		</Box>
	</Modal>
);
