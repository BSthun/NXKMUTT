import {
	Box,
	Container,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from '@material-ui/core';
import React from 'react';
import {
	Controller,
	Scene,
} from 'react-scrollmagic';
import DecoSpotWave from '../../images/decorate/spotwave.svg';

const MissionSection = () => {
	const classes = useStyles();
	
	return (
		<Paper className={classes.root} square elevation={0}>
			<div id="trigger" />
			<Box
				className={classes.decoCircle}>
				<Controller>
					<Scene
						triggerElement="#trigger"
						duration={500}
					>
						{(progress) => (
							<img alt="Decoration element" src={DecoSpotWave}
							     style={{ transform: `rotate(${progress * 180}deg)` }} />
						)}
					</Scene>
				</Controller>
			</Box>
			<Container maxWidth="lg">
				<Grid container>
					<Grid item>
						<Typography variant="h6" color="textPrimary">
							Our team investigates neural and computational mechanism that support human perception and
							cognitive functions, and study how they develop from children and teenagers to fully grown
							adults. Moreover, we study how brain functions decline in aging society.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Paper>
	);
};

const useStyles = makeStyles((theme) => ({
	root: (props) => ({
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		minHeight: theme.spacing(128),
	}),
	decoCircle: (props) => ({
		position: 'absolute',
		top: theme.spacing(0),
		left: theme.spacing(-64),
		width: theme.spacing(128),
		height: theme.spacing(128),
	}),
}));

export default MissionSection;
