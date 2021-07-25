import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	ButtonBase,
	makeStyles,
	Tooltip,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const NavbarToggle = ({ fa, tooltip, onClick }) => {
	const classes = useStyles();
	return (
		<Tooltip title={tooltip} style={{ flex: 1 }}>
			<ButtonBase className={classes.button} onClick={onClick}>
				<FontAwesomeIcon icon={fa} />
			</ButtonBase>
		</Tooltip>
	);
};

const useStyles = makeStyles((theme) => ({
	button: (props) => ({
		margin: `${theme.spacing(2)}px 0 ${theme.spacing(2)}px ${theme.spacing(2)}px`,
		padding: theme.spacing(2),
		minWidth: theme.spacing(10),
		display: 'flex',
		color: theme.palette.text.primary,
		border: `1px solid ${theme.palette.text.primary}`,
		borderRadius: 1000,
		transition: '0.3s all',
		'&:hover': {
			color: theme.palette.background.paper,
			backgroundColor: theme.palette.text.primary,
		},
	}),
}));

NavbarToggle.propTypes = {
	tooltip: PropTypes.string.isRequired,
	fa: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default NavbarToggle;
