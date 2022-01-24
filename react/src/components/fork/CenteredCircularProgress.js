import {
	Box,
	CircularProgress,
} from '@mui/material';
import React from 'react';

const CenteredCircularProgress = () => {
	return (
		<Box display="flex" justifyContent="center" padding="48px 0">
			<CircularProgress />
		</Box>
	);
};

export default CenteredCircularProgress;