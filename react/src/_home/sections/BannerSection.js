import {
	Box,
	Container,
	makeStyles,
	Typography,
	useTheme,
} from '@material-ui/core';
import React from 'react';
import { Parallax } from 'react-parallax';
import BannerBgDark from '../../images/bannerbg-dark.jpg';
import BannerBgLight from '../../images/bannerbg-light.jpg';
import HeaderSlabMask from '../../images/mask/headerslab.svg';

const BannerSection = () => {
	const theme = useTheme();
	const classes = useStyles();
	
	return (
		<Box position="relative">
			<Parallax bgImage={theme.palette.type === 'dark' ? BannerBgDark : BannerBgLight}
			          bgImageAlt="background"
			          bgImageStyle={{ height: '100%', width: '100%', objectFit: 'cover' }}
			          strength={300}
			          className={classes.root}
			>
				<Container maxWidth="lg" className={classes.container}>
					<Typography variant="h3" align="right" color="textPrimary">Neuroscience Center</Typography>
					<Typography variant="h4" align="right" color="textPrimary">
						for Research and Innovation (NX),
						<br /> Learning Institute, KMUTT
					</Typography>
				</Container>
			</Parallax>
			<div className={classes.slab} />
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	root: (props) => ({
		minHeight: '100vh',
		// position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		// backgroundImage: `url(${theme.palette.type === 'dark' ? BannerBgDark : BannerBgLight})`,
		// backgroundSize: 'cover',
		// backgroundPosition: 'center',
	}),
	container: (props) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingBottom: theme.spacing(36),
	}),
	slab: (props) => ({
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: 'calc(5 / 32 * 100vw)',
		maskImage: `url(${HeaderSlabMask})`,
		backgroundColor: theme.palette.background.paper,
	}),
}));

export default BannerSection;
