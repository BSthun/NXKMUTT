import {
	Container,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from '@material-ui/core';
import React from 'react';

const MissionSection = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.root} square elevation={0}>
			<div className={classes.decoCircle}>
				<img alt="Decoration element" src="" />
			</div>
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
	}),
	decoCircle: (props) => ({}),
}));

export default MissionSection;
