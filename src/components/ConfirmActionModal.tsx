import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';

type DeleteModalProps = {
	title: string;
	subtitle: string;
	open: boolean;
	onClose: () => void;
	onConfirm: () => void;
};
export const ConfirmActionModal: React.FC<DeleteModalProps> = ({
	title,
	subtitle,
	open,
	onClose,
	onConfirm
}) => (
	<Modal open={open} onClose={onClose}>
		<ModalBox>
			<Typography id="modal-modal-title" variant="h6" component="h2">
				{title}
			</Typography>
			<Typography id="modal-modal-description" sx={{ mt: 2 }}>
				{subtitle}
			</Typography>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'end',
					gap: '20px'
				}}
			>
				<Button variant="outlined" onClick={onConfirm}>
					Yes
				</Button>
				<Button variant="contained" color="error" onClick={onClose}>
					No
				</Button>
			</Box>
		</ModalBox>
	</Modal>
);

export const ModalBox = styled(Box)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 400px;
	background-color: #fff;
	box-shadow:
		0 11px 15px -7px rgba(0, 0, 0, 0.2),
		0 24px 38px 3px rgba(0, 0, 0, 0.14),
		0 9px 46px 8px rgba(0, 0, 0, 0.12);
	padding: 16px;
	border-radius: 4px;
`;
