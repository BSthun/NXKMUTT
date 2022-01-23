import {
	Box,
	CircularProgress,
	Container,
	Grid,
} from '@mui/material';
import {
	useContext,
	useEffect,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import PageBanner from '../components/layout/PageBanner';
import SectionTitle from '../components/layout/SectionTitle';
import { FloatingContext } from '../contexts/FloatingContext';
import { strapiAxios } from '../utils/axios';
import TimelineItem from './components/TimelineItem';

const Event = () => {
	const [t, i18n] = useTranslation('event');
	const [events, setEvents] = useState([]);
	const { openSnackBar } = useContext(FloatingContext);
	
	useEffect(() => {
		strapiAxios
			.get(`/api/events?populate=banner`)
			.then(({ data }) => {
				console.log(data);
				setEvents(data.data);
			})
			.catch((error) => {
				openSnackBar(error.toString());
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	return (
		<Box display="flex" flexDirection="column" bgcolor="background.default" minHeight="100vh">
			<PageBanner title={t('event')} breadcrumbs={[{ href: '/', text: 'Home' }]} />
			<Container maxWidth="lg" sx={{ paddingTop: 4 }}>
				<Grid container>
					<Grid item xs={12} md={6}>
						<SectionTitle title="Upcoming" />
						{events.length > 0
							? events.map((event, index) =>
								<TimelineItem
									key={index}
									position={index === 0 ? 1 : (index === events.length - 1 ? -1 : 0)}
									name={event.attributes[`name_${i18n.language}`]}
									date={event.attributes.start}
									desc={event.attributes[`desc_${i18n.language}`]}
									event={event}
								/>)
							: <CircularProgress />}
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