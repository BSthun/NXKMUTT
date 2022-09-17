import {
	Container,
	Stack,
} from '@mui/material';
import React, {
	useEffect,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import CenteredCircularProgress from '../components/fork/CenteredCircularProgress';
import PageBanner from '../components/layout/PageBanner';
import { strapiAxios } from '../utils/axios';
import { useScroll } from '../utils/scroll';
import ProfileBody from './components/ProfileBody';

const Member = () => {
	useScroll();
	const { username } = useParams();
	const [, i18n] = useTranslation('home');
	const [member, setMember] = useState(null);
	
	useEffect(() => {
		strapiAxios
			.get(`/api/members?populate=photo,emails,phones,socials,affliliations.affiliation,educations,attrs,publications.banner&filters[username][$eq]=${username}`)
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
			
			<Container maxWidth="lg" style={{ minHeight: 'calc(100vh - 308px)' }}>
				{
					member ?
						<ProfileBody member={member} />
						: <CenteredCircularProgress />
				}
			</Container>
		</Stack>
	);
};

export default Member;