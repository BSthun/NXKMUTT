import {
	faMinus,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Box,
	Button,
	Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, {
	useRef,
	useState,
} from 'react';

import { useTranslation } from 'react-i18next';

const FilterBox = ({ children, text }) => {
	const [t] = useTranslation('content');
	const classes = useStyles();
	
	const [ison, setison] = useState(false);
	const ref = useRef();
	
	return (
		<Box className={classes.filterBox}>
			<Button style={{ padding: 15, width: '100%' }} onClick={() => setison(!ison)}>
				<Box className={classes.filterTitle}>
					<Typography variant="p" color="textPrimary">{t(text)}</Typography>
					<FontAwesomeIcon icon={ison ? faMinus : faPlus} className={classes.plusIcon} />
				</Box>
			</Button>
			<Box height={ison ? ref.current.offsetHeight : 0}
			     style={{ transition: '0.25s all', marginTop: 10 }}
			     overflow="hidden"
			     width="fit-content"
			>
				<Box className={classes.subTitle} ref={ref}>
					{children}
				</Box>
			</Box>
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	section: {
		display: 'flex',
		flexDirection: 'column',
		margin: '50px 10px 0 20px',
		padding: '0 40px 0 0',
		height: 'auto',
		[theme.breakpoints.up('lg')]: {
			borderRight: `2px ${theme.palette.text.primary} solid`,
		},
	},
	filterBox: {
		
		height: 'auto',
		width: '100%',
	},
	filterTitle: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		justifyContent: 'space-between',
		cursor: 'pointer',
	},
	subTitle: {
		display: 'flex',
		flexDirection: 'column',
	},
	plusIcon: {
		color: theme.palette.text.primary,
	},
	tagsTitle: {
		marginLeft: '10px',
	},
	tagBox: {
		display: 'flex',
		alignItems: 'center',
		height: 40,
		padding: '0 20px',
		borderRadius: theme.shape.borderRadius,
		cursor: 'pointer',
		justifyContent: 'center',
		marginBottom: 10,
		width: 100,
		[theme.breakpoints.down('sm')]: {
			width: 150,
		},
	},
}));

export default FilterBox;