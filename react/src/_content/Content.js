import {
	Box,
	Container,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageBanner from '../components/layout/PageBanner';
import { useQuery } from '../utils/hooks';
import ContentFeed from './sections/ContentFeed';
import ContentList from './sections/ContentList';
import FilterBar from './sections/FilterBar';

const Content = () => {
	const query = useQuery();
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
					{
						query.get('page') ?
							<ContentList /> :
							<ContentFeed />
					}
				</Box>
			</Container>
		</Box>
	);
};

export default Content;