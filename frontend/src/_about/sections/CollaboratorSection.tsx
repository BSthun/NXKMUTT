import { Container, Grid, Theme } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CenteredCircularProgress from '../../components/fork/CenteredCircularProgress'
import { strapiAxios } from '@/utils/axios'
import MemberItem from '../../_home/components/MemberItem'

const CollaboratorSection = () => {
	const classes = useStyles()
	const [, i18n] = useTranslation('home')
	
	const [collaborators, setCollaborators] = useState(null)
	
	useEffect(() => {
		strapiAxios
			.get('/api/collaborators?populate=photo&pagination[limit]=-1')
			.then((response) => {
				const data = response.data.data
				setCollaborators(data.sort((el1, el2) => el1.attributes.order - el2.attributes.order))
			})
			.catch((error) => {
				console.log(error.message)
			})
	}, [])
	
	return (<div className={classes.root}>
		<Container maxWidth='lg'>
			{
				collaborators ? (
						<Grid container spacing={4}>
							{collaborators
								.map((el) => (<Grid
									item
									xs={12}
									md={4}
									lg={3}
									key={el.attributes.username}
								>
									<MemberItem
										name={`${el.attributes[`prefix_${i18n.language}`] || ''} ${el.attributes[`name_${i18n.language}`]} ${el.attributes[`surname_${i18n.language}`]}`}
										position={el.attributes.position}
										photo={el.attributes.photo.data?.attributes.url || '/'}
										link={undefined}
									/>
								</Grid>))}
						</Grid>)
					: <CenteredCircularProgress />
			}
		</Container>
	</div>)
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: '48px 0',
		backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.default,
	},
}))

export default CollaboratorSection
