import { Box, Container, Grid, Theme, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CenteredCircularProgress from '../../components/fork/CenteredCircularProgress'
import { strapiAxios } from '../../utils/axios'
import MemberItem from '../components/MemberItem'
import Title from '../components/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const sections = [
	{
		title: 'Faculty Member',
		type: 'faculty_member',
	},
	{
		title: 'Research Assistant',
		type: 'research_assistant',
	},
	{
		title: 'Graduate Student',
		type: 'graduate_student',
	},
	{
		title: 'Postgraduate Student',
		type: 'postgraduate_student',
	},
	{
		title: 'International Collaborator',
		type: 'international_collaborator',
	},
	{
		title: 'Administrator',
		type: 'administrator',
	},
	{
		title: 'Other',
		type: 'other',
	},
]
const MemberSection = () => {
	const classes = useStyles()
	const [, i18n] = useTranslation('home')

	const [members, setMembers] = useState(null)

	useEffect(() => {
		strapiAxios
			.get('/api/members?populate=photo&pagination[limit]=-1')
			.then((response) => {
				const data = response.data.data
				setMembers(
					data.sort(
						(el1, el2) =>
							el1.attributes.order - el2.attributes.order
					)
				)
			})
			.catch((error) => {
				console.log(error.message)
			})
	}, [])

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				{members ? (
					sections.map(
						(section) =>
							members.filter(
								(el) => el.attributes.type === section.type
							).length > 0 && (
								<Box key={section.type}>
									<Title color="#89c934">
										{section.title}
									</Title>
									{
										<Grid
											container
											spacing={4}
										>
											{members
												.filter(
													(el) =>
														el.attributes.type ===
														section.type
												)
												.map((el) => (
													<Grid
														item
														xs={12}
														md={4}
														lg={3}
														key={
															el.attributes
																.username
														}
													>
														<MemberItem
															name={`${
																el.attributes[
																	`prefix_${i18n.language}`
																] || ''
															} ${
																el.attributes[
																	`name_${i18n.language}`
																]
															} ${
																el.attributes[
																	`surname_${i18n.language}`
																]
															}`}
															position={
																el.attributes
																	.position
															}
															photo={
																el.attributes
																	.photo.data
																	?.attributes
																	.url || '/'
															}
															link={`/member/${el.attributes.username}`}
														/>
													</Grid>
												))}
										</Grid>
									}
								</Box>
							)
					)
				) : (
					<CenteredCircularProgress />
				)}
				<Link to="/about/collaborator">
					<Box
						margin="24px 0"
						padding="18px 36px"
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						borderRadius={1}
						sx={{ backgroundColor: '#ffefc2' }}
					>
						<Typography
							color="#b08100"
							variant="h5"
						>
							Collaborator
						</Typography>
						<FontAwesomeIcon
							icon={faChevronRight}
							color="#b08100"
						/>
					</Box>
				</Link>
			</Container>
		</div>
	)
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: '48px 0',
		backgroundColor:
			theme.palette.mode === 'dark'
				? theme.palette.background.default
				: theme.palette.background.default,
	},
}))

export default MemberSection
