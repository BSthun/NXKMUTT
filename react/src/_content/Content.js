import {
	Box,
	Container,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageBanner from '../components/layout/PageBanner';
import Feed from './sections/Feed';
import FilterBar from './sections/FilterBar';

const Content = () => {
	const [t] = useTranslation('content');
	const [search, setSearch] = useState(null);
	
	return (
		<Box display="flex" flexDirection="column" alignItems="center" bgcolor="background.default">
			<PageBanner
				title={search ? t('search-result') : t('content')}
				breadcrumbs={[
					{ href: '/', text: 'Home' },
					...search ? [{ href: '/content', text: t('content') }] : [],
				]}
			/>
			<Container maxWidth="lg">
				<Box display="flex" flexDirection={{ xs: 'column-reverse', md: 'row' }}>
					<FilterBar setSearch={setSearch} />
					<Feed />
				</Box>
			</Container>
		</Box>
	);
};

export default Content;