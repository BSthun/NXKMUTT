import {
	Box,
	Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogItem from '../components/BlogItem';
import FeaturedSection from './FeaturedSection';
import PublicationsSection from './PublicationsSection';

const NewsSection = () => {
	const classes = useStyles();
	const [t] = useTranslation('content');
	
	return (
		<Box className={classes.section}>
			<Typography variant="h4" color="textPrimary">{t('featured')}</Typography>
			<FeaturedSection />
			<Typography variant="h4" color="textPrimary">{t('publications')}</Typography>
			<PublicationsSection />
			<Box width={300} height={200} marginBottom={20}>
				<BlogItem background="http://localhost:1337/uploads/thumbnail_28301483_15d1f6d008.jpeg" />
			</Box>
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