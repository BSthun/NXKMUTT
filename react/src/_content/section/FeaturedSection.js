import { Box, Paper } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

const FeaturedSection = () => {
	const classes = useStyles();
	
	return (
		<Box className={classes.section}>
			<Box className={classes.featureBox}>
				<Paper className={classes.setBox} elevation={3} />
				<Box className={classes.subBox}>
					<Paper className={classes.setBox} elevation={3} />
					<Paper className={classes.setBox} elevation={3} />
				</Box>
			</Box>
		</Box>
	)
		;
};

const useStyles = makeStyles((theme) => ({
	section: {
		marginTop: 20,
	},
	featureBox: {
		display: 'flex',
		height: 380,
		marginBottom: 50,
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			height: '600px',
		},
	},
	setBox: {
		borderRadius: theme.shape.borderRadius,
		flex: '1',
		padding: '15px',
		margin: 5,
	},
	subBox: {
		flex: '1',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		[theme.breakpoints.down('md')]: {
			flex: '2.5',
		},
	},
}));

export default FeaturedSection;