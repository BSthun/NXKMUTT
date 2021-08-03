import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	ButtonBase,
	makeStyles,
} from '@material-ui/core';
import { alpha } from '@material-ui/core/styles/colorManipulator';
import React, { useContext } from 'react';
import { FloatingContext } from '../../contexts/FloatingContext';

const ContactItem = ({ anchor, text, fa }) => {
	const { openSnackBar } = useContext(FloatingContext);
	const classes = useStyles();
	
	const copy = () => {
		navigator.clipboard?.writeText(text).then(() =>
			openSnackBar(`"${text}" copied to clipboard`),
		);
	};
	
	return (
		<div className={classes.root}>
			<a href={anchor}>
				<ButtonBase className={classes.separator}>
					<FontAwesomeIcon icon={fa} className={classes.fa} />
				</ButtonBase>
			</a>
			<ButtonBase className={classes.separator} onClick={copy}>
				<FontAwesomeIcon icon={faClipboard} className={classes.fa} />
			</ButtonBase>
			<p style={{ margin: 'auto' }}>{text}</p>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: 280,
		height: 40,
		marginTop: 12,
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'center',
		overflow: 'hidden',
		border: `1px solid ${theme.palette.text.primary}`,
		borderRadius: 1000,
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
	separator: {
		padding: '11px 12px',
		borderRight: `1px solid ${theme.palette.text.primary}`,
		'&:hover': {
			backgroundColor: alpha(theme.palette.text.primary, 0.1),
		},
		'&:first-child': {
			padding: '11px 12px 11px 18px',
		},
	},
	fa: {
		fontSize: 18,
	},
}));

export default ContactItem;
