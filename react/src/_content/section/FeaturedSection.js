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
				<Paper className={classes.setBox} />
				<Box className={classes.subBox}>
					<Paper className={classes.setBox} />
					<Paper className={classes.setBox} />
				</Box>
			</Box>
		</Box>
	)
		;
};

const useStyles = makeStyles((theme) => ({
	section: {
		marginTop: '20px',
	},
	featureBox: {
		display: 'flex',
		height: 380,
		marginBottom: 100,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			height: '600px',
		},
	},
	setBox: {
		borderRadius: theme.shape.borderRadius,
		flex: '1',
		padding: '15px',
		margin: '5px',
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