import {
	Box,
	Container,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PageBanner from '../components/layout/PageBanner';
import FilterBar from './sections/FilterBar';
import NewsSection from './sections/NewsSection';

const Content = () => {
	const [t] = useTranslation('content');
	
	return (
		<Box display="flex" flexDirection="column" alignItems="center" bgcolor="background.default">
			<PageBanner title={t('content')} breadcrumbs={[{ href: '/', text: 'Home' }]} />
			<Container maxWidth="lg">
				<Box display="flex"
				     justifyContent="space-between"
				     width="100%"
				     flexDirection={{ xs: 'column-reverse', md: 'row' }}
				>
					<Box width={{ xs: '100%', md: 300 }} overflow="hidden">
						<FilterBar />
					</Box>
					<Box flex={1}>
						<NewsSection />
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Content;