import {
	Box,
	makeStyles,
} from '@material-ui/core';
import React from 'react';

const MissionSection = () => {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
		
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	root: (props) => ({
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: theme.palette.background.paper,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	}),
}));

export default MissionSection;
