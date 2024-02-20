import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { RefObject } from 'react';

type EditingFieldProps = {
	value: string;
	inputValue: string;
	isEdit: boolean;
	label: string;
	setState: React.Dispatch<React.SetStateAction<string>>;
	inputRef?: RefObject<any>;
};

export const EditingField: React.FC<EditingFieldProps> = ({
	value,
	inputValue,
	isEdit,
	label,
	setState,
	inputRef
}) => {
	return isEdit ? (
		<TextField
			value={inputValue}
			label={label}
			variant="outlined"
			onChange={(event) => setState(event.target.value)}
			inputRef={inputRef}
		/>
	) : (
		<Typography variant="h5" component="div" sx={{ minHeight: '56px' }}>
			{value}
		</Typography>
	);
};
