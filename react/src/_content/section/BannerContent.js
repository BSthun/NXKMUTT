import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Box,
	FormControl,
	Input,
	InputAdornment,
	InputLabel,
	Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import spiralangleDark from '../../images/abstract/spiralangle-dark.svg';
import spiralangleLight from '../../images/abstract/spiralangle-light.svg';

const BannerContent = () => {
	const classes = useStyles();
	const [t] = useTranslation('content');
	
	return (
		<Box className={classes.root}>
			<Box>
				<Typography variant="h2" color="textPrimary">{t('content')}</Typography>
			</Box>
			<Box>
				<FormControl>
					<InputLabel htmlFor="input-with-icon-adornment">{t('search')}</InputLabel>
					<Input
						id="input-with-icon-adornment"
						startAdornment={
							<InputAdornment position="start">
								<FontAwesomeIcon icon={faSearch} />
							</InputAdornment>
						}
					/>
				</FormControl>
			</Box>
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	root: (props) => ({
		paddingTop: '60px',
		width: '100%',
		height: '200px',
		backgroundImage: theme.palette.mode === 'dark' ? `url("${spiralangleDark}")` : `url("${spiralangleLight}")`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	}),
}));

export default BannerContent;