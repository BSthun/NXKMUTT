import {
	faFacebook,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
	faAt,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
	Box,
	Card,
	Grid,
	Stack,
	Typography,
} from '@mui/material';
import React from 'react';
import BlogItem from '../../_content/components/BlogItem';
import ContactIcon from './ContactIcon';
import ContentChip from './ContentChip';
import { strapiAxios } from '../../utils/axios';
import { useTranslation } from 'react-i18next';
import ProfileSection from './ProfileSection';

const ProfileBody = ({ member }) => {
	const [, i18n] = useTranslation('home');
	console.log("member",member)
	return (
		<Box minHeight="80vh" flex={1}>
			<Grid spacing={5} container sx={{padding: '0rem 3rem'}}>
				<Grid item md={3}>
					<Box sx={{width: '100%', aspectRatio: "1", overflow: 'hidden', borderRadius: '100%', transform: 'scale(.8)'}}>
						<img style={{width: '100%'}} src={strapiAxios.baseURL + member.attributes.photo?.data.attributes.url} alt={member.name} />
					</Box>
				</Grid>
				<Grid item md={9} sx={{alignItems: 'center', display: "flex", flexWrap:'wrap'}}>
					<Box sx={{ width: '100%'}}>
						<Typography variant='h3' color="textPrimary">{member.attributes[`name_${i18n.language}`]} {member.attributes[`surname_${i18n.language}`]}</Typography>
						<Typography variant='h6' color="textPrimary" sx={{fontWeight: '400'}}>{member.attributes[`position`]}</Typography>
					</Box>
				</Grid>
			</Grid>
			<Grid container spacing={5}  mt={1}>
				<Grid item md={6}>
					<ProfileSection title="Contact details" member={member}/>
				</Grid>
				<Grid item md={6}>
					<ProfileSection title="Attributes" member={member} attributes/>
				</Grid>
			</Grid>
			<Grid spacing={5} container mt={5}>
				{[1, 2, 3, 4, 5, 6].map(item => 
					<Grid key={item} item xs={4}>
						<BlogItem title="Hello"
							description="this is a dummy text for placeholder only. Egg is born before chicken?"
							date="2021/10/6"
							background="https://static.bangkokpost.com/media/content/20200620/c1_1938008_200620092012.jpg"
							height
						/>
					</Grid>
				)}
			</Grid>
		</Box>
	);
};

export default ProfileBody;