import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Box,
	FormControl,
	Input,
	InputAdornment,
	InputLabel,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import spiralangleDark from '../../images/abstract/spiralangle-dark.svg';
import spiralangleLight from '../../images/abstract/spiralangle-light.svg';

const BannerContent = () => {
	const classes = useStyles();
	const [t, i18n] = useTranslation('content');
	
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
		backgroundImage: theme.palette.type === 'dark' ? `url("${spiralangleDark}")` : `url("${spiralangleLight}")`,
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
	}),
}));

export default BannerContent;