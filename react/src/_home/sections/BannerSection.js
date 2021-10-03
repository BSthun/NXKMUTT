import { Box, Container, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import BottomSlab from '../../components/decorate/BottomSlab';
import BannerBgDark from '../../images/bannerbg-dark.jpg';
import BannerBgLight from '../../images/bannerbg-light.jpg';

const BannerSection = () => {
	const classes = useStyles();
	
	return (
		<Box position="relative" minHeight="100vh" display="flex" overflow="hidden">
			<Parallax className={classes.parallax} y={[-60, 40]} />
			<Container maxWidth="lg" className={classes.container}>
				<Typography variant="h3" align="right" color="textPrimary">Neuroscience Center</Typography>
				<Typography variant="h4" align="right" color="textPrimary">
					for Research and Innovation (NX),
					<br /> Learning Institute, KMUTT
				</Typography>
			</Container>
			<BottomSlab />
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	parallax: {
		position: 'absolute',
		inset: 0,
		'& > div': {
			width: '100%',
			height: 'calc(100% + 10%)',
			backgroundImage: `url(${theme.palette.mode === 'dark' ? BannerBgDark : BannerBgLight})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
		},
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingBottom: theme.spacing(36),
		paddingRight: theme.spacing(12),
		zIndex: 2,
		[theme.breakpoints.down('md')]: {
			paddingRight: theme.spacing(6),
		},
	},
}));

export default BannerSection;
