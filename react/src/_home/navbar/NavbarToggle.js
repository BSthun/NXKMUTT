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
		<Tooltip title={tooltip}>
			<ButtonBase className={classes.button} onClick={onClick}>
				<FontAwesomeIcon icon={fa} />
			</ButtonBase>
		</Tooltip>
	);
};

const useStyles = makeStyles((theme) => ({
	button: (props) => ({
		marginLeft: '12px',
		padding: '6px',
		minWidth: '32px',
		display: 'flex',
		color: theme.palette.text.primary,
		border: `1px solid ${theme.palette.text.primary}`,
		borderRadius: 1000,
		transition: '0.3s all',
		'&:hover': {
			color: theme.palette.background.paper,
			backgroundColor: theme.palette.text.primary
		},
	}),
}));

NavbarToggle.propTypes = {
	tooltip: PropTypes.string.isRequired,
	fa: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default NavbarToggle;
