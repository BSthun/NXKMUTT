import {
	Box,
	Container,
	Grid,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PageBanner from '../components/layout/PageBanner';
import SectionTitle from './components/SectionTitle';
import TimelineItem from './components/TimelineItem';

const Event = () => {
	const [t] = useTranslation('event');
	
	return (
		<Box display="flex" flexDirection="column" bgcolor="background.default" minHeight="100vh">
			<PageBanner title={t('event')} breadcrumbs={[{ href: '/', text: 'Home' }]} />
			<Container maxWidth="lg" sx={{ paddingTop: 4 }}>
				<Grid container>
					<Grid item xs={12} md={6}>
						<SectionTitle title="Upcoming" />
						<TimelineItem position={1} name="Hello World" date="2021/05/21" desc="This is a dummy text" />
						<TimelineItem position={0} name="Hello World" date="2021/05/21" desc="This is a dummy text" />
						<TimelineItem position={-1} name="Hello World" date="2021/05/21" desc="This is a dummy text" />
					</Grid>
				</Grid>
				<SectionTitle title="All events" />
				<Grid container>
					<Grid item xs={4} md={12}>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Event;