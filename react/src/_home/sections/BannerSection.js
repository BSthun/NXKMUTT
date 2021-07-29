import {
	Box,
	Container,
	makeStyles,
	Typography,
	useTheme,
} from '@material-ui/core';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import BannerBgDark from '../../images/bannerbg-dark.jpg';
import BannerBgLight from '../../images/bannerbg-light.jpg';
import HeaderSlabMask from '../../images/mask/headerslab.svg';

const BannerSection = () => {
	const theme = useTheme();
	const classes = useStyles();
	
	return (
		<Box position="relative" minHeight="100vh" display="flex" overflow="hidden">
			{/*<BannerParallax className={classes.parallax} />*/}
			<Parallax className={classes.parallax} y={[-30, 30]} tagOuter="figure">
				<img alt="Background" src={theme.palette.type === 'dark' ? BannerBgDark : BannerBgLight} />
			</Parallax>
			<Container maxWidth="lg" className={classes.container}>
				<Typography variant="h3" align="right" color="textPrimary">Neuroscience Center</Typography>
				<Typography variant="h4" align="right" color="textPrimary">
					for Research and Innovation (NX),
					<br /> Learning Institute, KMUTT
				</Typography>
			</Container>
			<div className={classes.slab} />
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	parallax: {
		position: 'absolute',
		inset: 0,
		'& div': {
			height: '100%',
			'& img': {
				width: '100%',
				height: '100%',
				objectFit: 'cover',
				objectPosition: 'center center',
			},
		},
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingBottom: theme.spacing(36),
		zIndex: 2,
	},
	slab: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: 'calc(5 / 32 * 100vw)',
		maxHeight: theme.spacing(48),
		maskImage: `url(${HeaderSlabMask})`,
		maskSize: '100% 100%',
		backgroundColor: theme.palette.background.default,
	},
}));

export default BannerSection;
