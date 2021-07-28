import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Box,
	Button,
	Card,
	CardActions,
	makeStyles,
	useTheme,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

const CenterCard = ({ fa, text, desc }) => {
	const theme = useTheme();
	const classes = useStyles();
	const [t] = useTranslation('home');
	
	return (
		<Card className={classes.card}>
			<Box display="flex" alignItems="center" margin={theme.spacing(1)}>
				<Box className={classes.fa}>
					<FontAwesomeIcon icon={fa} />
				</Box>
				{text}
			</Box>
			<Box padding={`0 ${theme.spacing(4)}px`}>
				{desc}
			</Box>
			<CardActions>
				<Box marginRight="auto" />
				<Button>{t('learnmore')} &nbsp; <FontAwesomeIcon icon={faChevronRight} /></Button>
			</CardActions>
		</Card>
	);
};

const useStyles = makeStyles((theme) => ({
	card: (props) => ({
		marginBottom: theme.spacing(1),
		width: '100%',
		// padding: `${theme.spacing(4)}px ${theme.spacing(8)}px`,
	}),
	fa: (props) => ({
		width: theme.spacing(12),
		height: theme.spacing(12),
		borderRadius: 999,
		border: `1px solid ${theme.palette.text.hint}`,
		marginRight: theme.spacing(3),
		'& > svg': {
			display: 'block',
			fontSize: theme.spacing(6),
			margin: `${theme.spacing(3)}px auto`,
		},
	}),
}));

CenterCard.propTypes = {
	fa: PropTypes.object.isRequired,
	text: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
};

export default CenterCard;
