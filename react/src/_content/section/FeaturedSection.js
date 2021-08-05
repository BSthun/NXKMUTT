import {
	Box,
	makeStyles,
	Paper,
} from '@material-ui/core';
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
		[theme.breakpoints.down('sm')]: {
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
		[theme.breakpoints.down('sm')]: {
			flex: '2.5',
		},
	},
}));

export default FeaturedSection;