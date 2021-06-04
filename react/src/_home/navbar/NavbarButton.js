import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	ButtonBase,
	makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import DelayLink from '../../components/routing/DelayLink';

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
	link: (props) => ({
		textDecoration: 'none',
		marginLeft: 6,
	}),
	button: (props) => ({
		padding: '6px 12px',
		color: theme.palette.text.primary,
		border: '1px solid transparent',
		borderRadius: 1000,
		transition: '0.3s all',
		'&:hover': {
			border: `1px solid ${theme.palette.text.primary}`,
		},
	}),
	fa: (props) => ({
		marginRight: 6,
	}),
}));

NavbarButton.propTypes = {
	to: PropTypes.string.isRequired,
	fa: PropTypes.object.isRequired,
};

export default NavbarButton;
