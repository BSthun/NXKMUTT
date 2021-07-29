import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	ButtonBase,
	makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import DelayLink from '../components/routing/DelayLink';

const NavbarButton = ({ to, fa, text }) => {
	const classes = useStyles();
	return (
		<DelayLink to={to} className={classes.link}>
			<ButtonBase className={classes.button}>
				<FontAwesomeIcon icon={fa} className={classes.fa} /> {text}
			</ButtonBase>
		</DelayLink>
	);
};

const useStyles = makeStyles((theme) => ({
	link: {
		textDecoration: 'none',
		marginLeft: theme.spacing(2),
	},
	button: {
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
		color: theme.palette.text.primary,
		border: '1px solid transparent',
		borderRadius: 1000,
		transition: '0.3s all',
		'&:hover': {
			border: `1px solid ${theme.palette.text.primary}`,
		},
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			margin: `${theme.spacing(2)}px 0`,
			border: `1px solid ${theme.palette.text.primary}`,
		},
	},
	fa: {
		marginRight: theme.spacing(2),
	},
}));

NavbarButton.propTypes = {
	to: PropTypes.string.isRequired,
	fa: PropTypes.object.isRequired,
};

export default NavbarButton;
