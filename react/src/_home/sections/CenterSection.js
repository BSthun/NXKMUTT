import {
	faBrain,
	faCloudMoon,
	faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {
	Box,
	Container,
	Grid,
	makeStyles,
} from '@material-ui/core';
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
	container: (props) => ({
		position: 'relative',
		height: theme.spacing(10), // 8 + 2
		[theme.breakpoints.down('sm')]: {
			height: theme.spacing(130), // 108 + 20 + 2
		},
	}),
	div: (props) => ({
		position: 'absolute',
		top: theme.spacing(-40),
		left: theme.spacing(4),
		right: theme.spacing(4),
		[theme.breakpoints.down('sm')]: {
			top: theme.spacing(-20),
		},
	}),
}));

export default CenterSection;
