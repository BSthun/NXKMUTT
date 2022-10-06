import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Container, Typography } from '@mui/material'
import { useContext, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import PageBanner from '../components/layout/PageBanner'
import Markdown from '../components/markdown/Markdown'
import { FloatingContext } from '../contexts/FloatingContext'
import { strapiAxios } from '../utils/axios'
import Reference from './components/Reference'

const EventDetail = () => {
	const [t, i18n] = useTranslation('content')
	const { slug } = useParams()
	const [loaded, setLoaded] = useState(false)
	const [event, setEvent] = useState(null)
	const { openSnackBar } = useContext(FloatingContext)

	const thumbnail =
		event?.attributes?.banner?.data?.attributes?.formats?.thumbnail?.url
	const realThumbnail = event?.attributes?.banner?.data?.attributes?.url
	const files = event?.attributes?.files
	const links = event?.attributes?.links

	const readingTime = useMemo(() => {
		const words = event?.attributes?.content.split(' ').length
		return Math.ceil(words / 200)
	}, [event])

	useEffect(() => {
		strapiAxios
			.get(
				`/api/events?populate=banner,organizers.photo&filters[slug][$eq]=${slug}`
			)
			.then(({ data }) => {
				setEvent(data.data[0])
			})
			.catch((err) => {
				openSnackBar(err.toString())
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const markdownStyle = {
		width: '100%',
		display: 'block',
		'& img': {
			width: '100%',
			borderRadius: '10px',
		},
		'& h1,h2,h3,h4,h5,h6,p, blockquote': {
			marginBottom: '1.5rem',
		},
		'& blockquote *': {
			marginBottom: 0,
		},
		'& ul, ol li': {
			marginLeft: '16px',
		},
	}

	return (
		<Box>
			<PageBanner
				title={'Post'}
				breadcrumbs={[
					{ href: '/', text: 'Home' },
					{ href: '/content', text: t('content') },
				]}
			/>
			<Container
				bgcolor="background.default"
				sx={{ padding: '40px 20px' }}
			>
				<Typography variant="h2">
					{event?.attributes[`name_${i18n.language}`]}
				</Typography>
				<Typography
					variant="body1"
					mt={2}
					fontWeight={600}
				>
					<FontAwesomeIcon
						icon={faCalendarAlt}
						style={{ marginRight: '.5rem' }}
					/>{' '}
					{event?.attributes?.published} · {readingTime} mins read
				</Typography>

				<Box
					mt={10}
					sx={markdownStyle}
				>
					<Box
						sx={{
							marginBottom: '1.5rem',
							overflow: 'hidden',
							width: '100%',
							position: 'relative',
							borderRadius: '10px',
						}}
					>
						<img
							src={strapiAxios.baseURL + thumbnail}
							style={{
								width: '100%',
								filter: 'blur(10px)',
								transform: 'scale(1.1)',
							}}
							alt={
								event?.attributes.banner?.data?.attributes
									?.alternativeText
							}
						/>
						<img
							loading="lazy"
							src={strapiAxios.baseURL + realThumbnail}
							onLoad={() => setLoaded(true)}
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
								opacity: loaded ? 1 : 0,
								transition: 'opacity 1s ease-in-out',
							}}
							alt={
								event?.attributes.banner?.data?.attributes
									?.alternativeText
							}
						/>
					</Box>
					<Markdown className="markdown">
						{event?.attributes?.content}
					</Markdown>
					<Reference
						files={files}
						links={links}
					/>
				</Box>
			</Container>
		</Box>
	)
}

export default EventDetail
