import { Container, darken, lighten, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

const Footer = () => {
	const classes = useStyles();
	
	return (
		<div className={classes.outer}>
			<Container maxWidth="lg" className={classes.container}>
				<Typography variant="h6" color="textPrimary">NX KMUTT website</Typography>
				<Typography variant="body2" color="textSecondary">
					&copy; 2021 NX Neuroscience Center KMUTT, all rights reserved.
				</Typography>
			</Container>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	outer: {
		padding: '32px 0',
		backgroundColor: theme.palette.mode === 'dark' ? lighten(theme.palette.background.default, 0.05)
			: darken(theme.palette.background.default, 0.1),
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.down('md')]: {
			alignItems: 'center',
		},
	},
}));

export default Footer;
