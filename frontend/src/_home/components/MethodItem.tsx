import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hexagon from '../../images/mask/hexagon.svg';

const MethodItem = ({ image, fa, title, subtitle, styles }) => {
	const navigate = useNavigate();
	const classes = useStyles({
		image,
	});
	
	return (
		<Box onClick={navigate.bind(this, `/methods/${title.toLowerCase()}`)} className={classes.root} {...styles}>
			<div className={classes.image} />
			<Box className={classes.content}>
				<FontAwesomeIcon icon={fa} size="3x" />
				<Typography variant="h5" gutterBottom>{title}</Typography>
			</Box>
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		height: theme.spacing(100),
		width: theme.spacing(90),
		maskImage: `url(${Hexagon})`,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		'&:hover': {
			'& > $image': {
				transform: 'scale(1.1)',
			},
		},
		[theme.breakpoints.down('lg')]: {
			height: theme.spacing(80),
			width: theme.spacing(72),
		},
	},
	image: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		backgroundImage: ({ image }) => `url(${image})`,
		backgroundSize: 'cover',
		filter: `brightness(${theme.palette.mode === 'dark' ? '8' : '12'}0%)`,
		transition: 'transform 1s ease-in-out',
	},
	content: {
		width: theme.spacing(54),
		height: theme.spacing(60),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		maskImage: `url(${Hexagon})`,
		color: theme.palette.text.secondary,
		backgroundColor: alpha(theme.palette.background.paper, 0.6),
		backdropFilter: `blur(6px) brightness(${theme.palette.mode === 'dark' ? '8' : '12'}0%)`,
		'& :first-child': {
			marginBottom: 8,
		},
	},
}));

MethodItem.propTypes = {
	image: PropTypes.string.isRequired,
	fa: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	styles: PropTypes.object.isRequired,
};

export default MethodItem;
