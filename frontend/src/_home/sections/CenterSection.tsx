import {
	faBrain,
	faCloudMoon,
	faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { Box, Container, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import CenterCard from '../components/CenterCard';

const CenterSection = () => {
	const classes = useStyles();
	
	return (
		<Box bgcolor="background.default">
			<Container className={classes.container}>
				<div className={classes.div}>
					<Grid container spacing={4}>
						<Grid item xs={12} md={4}>
							<CenterCard fa={faBrain}
							            text="NeuroMaze"
							            desc="Inventing new ways to tackle neurological and mental disorders."
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<CenterCard fa={faHeart}
							            text="Center 2"
							            desc="Frontier research lab in neuroscience, neurotechnology, and learning innovation."
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<CenterCard fa={faCloudMoon}
							            text="Center 3"
							            desc="Translating results from empirical experiments into useful industrial applications."
							/>
						</Grid>
					</Grid>
				</div>
			</Container>
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {
		position: 'relative',
		height: 48,
		[theme.breakpoints.down('md')]: {
			height: 544,
		},
	},
	div: {
		position: 'absolute',
		top: -160,
		left: 16,
		right: 16,
		zIndex: 3,
		[theme.breakpoints.down('md')]: {
			top: -60,
		},
	},
}));

export default CenterSection;
