import {
	Box,
	Container,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PageBanner from '../components/layout/PageBanner';
import FilterContent from './section/FilterContent';
import NewsSection from './section/NewsSection';

const Content = () => {
	const [t] = useTranslation('content');
	
	return (
		<Box display="flex" flexDirection="column" alignItems="center" bgcolor="background.default">
			<PageBanner title={t('content')} breadcrumbs={[{ href: '/', text: 'Home' }]} />
			<Container maxWidth="lg">
				<Box display="flex"
				     justifyContent="space-between"
				     width="100%"
				     flexDirection={{ xs: 'column', md: 'row' }}
				>
					<Box flex="1" overflow="hidden" marginBottom={10}>
						<FilterContent />
					</Box>
					<Box flex="4">
						<NewsSection />
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Content;