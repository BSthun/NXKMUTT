import {
	Box,
	Container,
	Grid,
	makeStyles,
	Typography,
	useTheme,
} from '@material-ui/core';
import React from 'react';
import { Tween } from 'react-gsap';
import {
	Controller,
	Scene,
} from 'react-scrollmagic';
import DecoSpotWave from '../../images/decorate/spotwave.svg';

const MissionSection = () => {
	const theme = useTheme();
	const classes = useStyles();
	
	return (
		<Box bgcolor="background.default" className={classes.root}>
			<Box position="absolute" top={0} left={-theme.spacing(64)} width={theme.spacing(128)}>
				<Controller>
					<div id="home-mission-deco1" />
					<Scene duration={500} triggerElement="#home-mission-deco1">
						{(progress) => (
							<Tween
								to={{
									rotation: 180,
								}}
								ease="linear"
								totalProgress={progress}
								paused
							>
								<img alt="Decoration element" src={DecoSpotWave} />
							</Tween>
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
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		minHeight: theme.spacing(128),
	},
}));

export default MissionSection;
