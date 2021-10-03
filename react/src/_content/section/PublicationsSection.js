import { Box, Paper } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

const PublicationsSection = () => {
	const classes = useStyles();
	
	return (
		<Box className={classes.section}>
			<Box className={classes.publicationsBox}>
				<Paper className={classes.setBox} elevation={3} />
				<Paper className={classes.setBox} elevation={3} />
				<Paper className={classes.setBox} elevation={3} />
			</Box>
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	section: {
		marginTop: 20,
	},
	publicationsBox: {
		display: 'flex',
		marginBottom: 30,
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			height: 600,
		},
	},
	setBox: {
		borderRadius: theme.shape.borderRadius,
		flex: '1',
		padding: 15,
		margin: 5,
		height: 240,
	},
}));

export default PublicationsSection;