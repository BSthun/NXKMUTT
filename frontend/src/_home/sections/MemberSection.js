import {
	Box,
	Container,
	Grid,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, {
	useEffect,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import CenteredCircularProgress from '../../components/fork/CenteredCircularProgress';
import { strapiAxios } from '../../utils/axios';
import MemberItem from '../components/MemberItem';
import Title from '../components/Title';

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
		title: 'KMUTT Collaborator',
		type: 'kmutt_collaborator',
	},
	{
		title: 'External Collaborator',
		type: 'external_collaborator',
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
];
const MemberSection = () => {
	const classes = useStyles();
	const [, i18n] = useTranslation('home');
	
	const [members, setMembers] = useState(null);
	
	useEffect(() => {
		strapiAxios
			.get('/api/members?populate=photo&pagination[limit]=-1')
			.then((response) => {
				const data = response.data.data;
				setMembers(data.sort((el1, el2) => (el1.attributes.order - el2.attributes.order)));
			})
			.catch((error) => {
				console.log(error.message);
			});
	}, []);
	
	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				{
					members ?
						sections.map((section) => members.filter((el) => (el.attributes.type === section.type)).length > 0 && (
							<Box key={section.type}>
								<Title color="#89c934">{section.title}</Title>
								{
									<Grid container spacing={4}>
										{
											members.filter((el) => (el.attributes.type === section.type)).map(
												(el) => (
													<Grid item xs={12} md={4} lg={3} key={el.attributes.username}>
														<MemberItem
															name={`${el.attributes[`prefix_${i18n.language}`] || ''} ${el.attributes[`name_${i18n.language}`]} ${el.attributes[`surname_${i18n.language}`]}`}
															position={el.attributes.position}
															photo={el.attributes.photo.data?.attributes.url || '/'}
															link={`/member/${el.attributes.username}`}
														/>
													</Grid>
												),
											)
										}
									</Grid>
								}
							</Box>
						)) : <CenteredCircularProgress />
				}
			</Container>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '48px 0',
		backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.default,
	},
}));

export default MemberSection;
