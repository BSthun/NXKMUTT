import {
	Box,
	Typography,
} from '@mui/material';
import React from 'react';

const SectionTitle = ({ title }) => {
	return (
		<Box marginY={4}>
			<Typography color="text.primary" variant="h6" fontWeight={550}>{title}</Typography>
		</Box>
	);
};

SectionTitle.propTypes = {};

export default SectionTitle;
