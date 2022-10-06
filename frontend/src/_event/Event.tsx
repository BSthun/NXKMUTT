import { Box, Container, Grid } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CenteredCircularProgress from '../components/fork/CenteredCircularProgress'
import PageBanner from '../components/layout/PageBanner'
import SectionTitle from '../components/layout/SectionTitle'
import { FloatingContext } from '../contexts/FloatingContext'
import { strapiAxios } from '../utils/axios'
import { useScroll } from '../utils/scroll'
import EventItem from './components/EventItem'

const Event = () => {
	useScroll()
	const [t, i18n] = useTranslation('event')
	const [events, setEvents] = useState([])
	const { openSnackBar } = useContext(FloatingContext)

	useEffect(() => {
		strapiAxios
			.get(`/api/events?populate=banner`)
			.then(({ data }) => {
				console.log(data)
				setEvents(data.data)
			})
			.catch((error) => {
				openSnackBar(error.toString())
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Box
			display="flex"
			flexDirection="column"
			bgcolor="background.default"
			minHeight="100vh"
		>
			<PageBanner
				title={t('event')}
				breadcrumbs={[{ href: '/', text: 'Home' }]}
			/>
			<Container
				maxWidth="lg"
				sx={{ paddingTop: 4 }}
			>
				<Grid
					container
					mb={8}
				>
					<SectionTitle title="All events" />
					<Grid
						container
						spacing={6}
					>
						{events.length > 0 ? (
							events.map((event, index) => (
								<Grid
									item
									xs={12}
									md={6}
								>
									<EventItem
										key={index}
										name={
											event.attributes[
												`name_${i18n.language}`
											]
										}
										date={event.attributes.start}
										desc={
											event.attributes[
												`desc_${i18n.language}`
											]
										}
										event={event}
									/>
								</Grid>
							))
						) : (
							<CenteredCircularProgress />
						)}
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default Event
