import {
	Box,
	Container,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React from 'react';
import BannerBgLight from '../../images/bannerbg-light.jpg';
import BannerBgDark from '../../images/bannerbg-dark.jpg';

const BannerSection = () => {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Container maxWidth="lg" className={classes.container}>
				<Typography variant="h3" align="right" color="textPrimary">Neuroscience Center</Typography>
				<Typography variant="h4" align="right" color="textPrimary">for Research and Innovation (NX),<br/>Learning Institute, KMUTT</Typography>
			</Container>
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	root: (props) => ({
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundImage: `url(${theme.palette.type === 'dark' ? BannerBgDark : BannerBgLight})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	}),
	container: (props) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'center',
	}),
}));

export default BannerSection;
