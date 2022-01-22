import {
	Box,
	CircularProgress,
	Container,
	Stack,
} from '@mui/material';
import React, {
	useEffect,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import PageBanner from '../components/layout/PageBanner';
import { strapiAxios } from '../utils/axios';
import ProfileBody from './components/ProfileBody';

const Member = () => {
	const { username } = useParams();
	const [, i18n] = useTranslation('home');
	const [member, setMember] = useState(null);
	
	useEffect(() => {
		// TODO: https://nxkmutt-strapi.bsthun.com/api/members/7?populate=emails,phones,socials,attrs,publications.banner
		strapiAxios
			.get(`/api/members?populate=photo,emails,phones,socials,attrs,publications.banner&filters[username][$eq]=${username}`)
			.then((response) => {
				setMember(response.data.data[0]);
			})
			.catch((error) => {
				console.log(error.message);
			});
	}, [username]);
	
	return (
		<Stack direction="column" alignItems="center" bgcolor="background.default">
			<PageBanner title={member ? member.attributes[`name_${i18n.language}`] : 'Member profile'}
			            breadcrumbs={[
				            { href: '/home', text: 'Home' },
				            { href: '/about', text: 'Member' },
			            ]}
			/>
			
			<Container maxWidth="lg">
				<Box display="flex"
				     width="100%"
				     flexDirection={{ xs: 'column-reverse', md: 'row' }}
				>
					{
						member ? <ProfileBody member={member} /> :
							<Box display="flex" justifyContent="center" paddingTop="20px">
								<CircularProgress />
							</Box>
						
					}
				</Box>
			</Container>
		</Stack>
	);
};

export default Member;