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
    Grid,
    Stack,
    Typography,
} from '@mui/material';
import React from 'react';
import BlogItem from '../../_content/components/BlogItem';
import ContactIcon from './ContactIcon';
import ContentChip from './ContentChip';

const ProfileBody = ({ member }) => {
	return (
		<Box minHeight="80vh" flex={1}>
			<Stack gap={5} mb={10}>
				<ContentChip header="biology">
					<Typography color="text.primary">
						{member.bio}
					</Typography>
				</ContentChip>
				<ContentChip header="contact">
					<Grid container spacing={2} gap={2} p={5} paddingX={10}>
						<ContactIcon icon={faPhone}> +66xxxxxxxxx </ContactIcon>
						<ContactIcon icon={faAt}> test@mail.kmutt.ac.th </ContactIcon>
						<ContactIcon icon={faFacebook}> Abcd </ContactIcon>
						<ContactIcon icon={faTwitter}> xxx_Xxxx </ContactIcon>
					</Grid>
				</ContentChip>
				<ContentChip header="publication">
					<Grid container gap={2}>
						{[1, 2, 3, 4, 5, 6].map(item => <Grid key={item} item xs={4}>
								<BlogItem title="Hello"
								          description="this is a dummy text for placeholder only. Egg is born before chicken?"
								          date="2021/10/6"
								          background="https://static.bangkokpost.com/media/content/20200620/c1_1938008_200620092012.jpg"
								          height
								/>
							</Grid>,
						)}
					</Grid>
				</ContentChip>
			</Stack>
		</Box>
	);
};

export default ProfileBody;