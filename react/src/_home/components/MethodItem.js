import {
	Box,
	makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Hexagon from '../../images/mask/hexagon.svg';

const MethodItem = ({ image, fa, title, subtitle }) => {
	const classes = useStyles({
		image,
	});
	return (
		<Box className={classes.root}>
			<div className={classes.image} />
			<Box className={classes.content}>
				{/* Insert element inside here */}
			</Box>
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		height: theme.spacing(100),
		width: theme.spacing(90),
		maskImage: `url(${Hexagon})`,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'&:hover': {
			'& > $image': {
				transform: 'scale(1.1)',
			},
		},
	},
	image: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		backgroundImage: ({ image }) => `url(${image})`,
		transition: '1s ease-in-out',
	},
	content: {
		width: '60%',
		height: '60%',
		maskImage: `url(${Hexagon})`,
		backgroundColor: theme.palette.background.paper,
	},
}));

MethodItem.propTypes = {
	image: PropTypes.string.isRequired,
	fa: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
};

export default MethodItem;
