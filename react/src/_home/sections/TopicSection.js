import { makeStyles } from '@material-ui/core';
import React from 'react';
import BottomSlab from '../../components/decorate/BottomSlab';

const TopicSection = () => {
	const classes = useStyles();
	
	return (
		<div className={classes.root}>
			<BottomSlab className={classes.slab} />
			<BottomSlab />
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		minHeight: 800,
	},
	slab: {
		top: 0,
		transform: 'scaleY(-1) scaleX(-1)',
	},
}));

export default TopicSection;
