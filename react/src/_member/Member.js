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
import axios from '../utils/axios';
import ProfileBody from './components/ProfileBody';
import ProfileSideBar from './components/ProfileSideBar';

const Member = () => {
	const { id } = useParams();
	const [, i18n] = useTranslation('home');
	const [member, setMember] = useState(null);
	
	useEffect(() => {
		axios
			.get(`/members/${id}`)
			.then((response) => {
				setMember(response.data);
			})
			.catch((error) => {
				console.log(error.message);
			});
	}, [id]);
	
	return (
		<Stack direction="column" alignItems="center" bgcolor="background.default">
			<PageBanner title={member ? member[`name_${i18n.language}`] : 'Member profile'}
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
						member ?
							<>
								<ProfileSideBar member={member} />
								<ProfileBody member={member} />
							</> :
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