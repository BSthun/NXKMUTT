import {
	Box,
	makeStyles,
} from '@material-ui/core';
import React from 'react';

const FeaturedSection = () => {
	const classes = useStyles();
	
	return (
		<Box className={classes.section}>
			<Box className={classes.featureBox}>
				<Box className={classes.setBox}>
				
				</Box>
				<Box className={classes.subBox}>
					<Box className={classes.setBox}>
					
					</Box>
					<Box className={classes.setBox}>
					
					</Box>
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
		height: '400px',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			height: '600px',
		},
	},
	setBox: {
		boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
		borderRadius: theme.shape.borderRadius,
		flex: '1',
		padding: '15px',
		margin: '5px',
		backgroundImage: `url("https://www.apple.com/v/environment/m/images/meta/og__bghpqp9r7ewi.png?202105201948")`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
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