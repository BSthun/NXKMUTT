import {
	Box,
	Container,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PageBanner from '../components/layout/PageBanner';
import SectionTitle from './components/SectionTitle';

const Event = () => {
	const [t] = useTranslation('event');
	
	return (
		<Box display="flex" flexDirection="column" bgcolor="background.default">
			<PageBanner title={t('event')} breadcrumbs={[{ href: '/', text: 'Home' }]} />
			<Container maxWidth="lg">
				<SectionTitle title="Upcoming" />
			</Container>
		</Box>
	);
};

export default Event;