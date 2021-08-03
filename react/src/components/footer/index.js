import {
	Container,
	darken,
	Grid,
	lighten,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React from 'react';

const Footer = () => {
	const classes = useStyles();
	
	return (
		<div className={classes.outer}>
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					<Grid item xs={12} md={4}>
						<Typography variant="h5" color="textPrimary" gutterBottom>NX KMUTT website</Typography>
						<Typography variant="body2" color="textSecondary" gutterBottom>
							&copy; 2021 NX Neuroscience Center KMUTT, all rights reserved.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	outer: {
		padding: '32px 0',
		backgroundColor: theme.palette.type === 'dark' ? lighten(theme.palette.background.default, 0.05)
			: darken(theme.palette.background.default, 0.1),
	},
}));

export default Footer;
