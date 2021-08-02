import {
	Box,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import FeaturedSection from './FeaturedSection';

const NewsSection = () => {
	const classes = useStyles();
	const [t] = useTranslation('content');
	
	return (
		<Box className={classes.section}>
			<Typography variant="h4" color="textPrimary">{t('featured')}</Typography>
			<FeaturedSection />
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	section: {
		display: 'flex',
		flexDirection: 'column',
		padding: '50px 20px 0px 20px',
	},
}));

export default NewsSection;