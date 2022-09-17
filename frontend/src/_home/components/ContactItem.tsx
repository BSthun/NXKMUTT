import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonBase } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { alpha } from '@mui/material/styles';
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
			<p>{text}</p>
			<div className={classes.copier} onClick={copy}>
				<FontAwesomeIcon icon={faClipboard} className={classes.fa} />
			</div>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: 280,
		height: 40,
		marginTop: 12,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		overflow: 'hidden',
		border: `1px solid ${theme.palette.text.primary}`,
		borderRadius: 1000,
		[theme.breakpoints.down('md')]: {
			width: '100%',
		},
	},
	separator: {
		padding: '11px 16px 11px 20px',
		borderRight: `1px solid ${theme.palette.text.primary}`,
		'&:hover': {
			backgroundColor: alpha(theme.palette.text.primary, 0.1),
		},
	},
	copier: {
		marginRight: 15,
		cursor: 'pointer',
	},
	fa: {
		fontSize: 18,
	},
}));

export default ContactItem;
