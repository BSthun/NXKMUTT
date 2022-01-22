import {
	Box,
	Chip,
	Stack,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/layout/SectionTitle';
import { strapiAxios } from '../../utils/axios';
import AuthorAvatar from './AuthorAvatar';

const SideBar = ({ post }) => {
	const [t, i18n] = useTranslation('content');
	
	const authors = post?.attributes?.authors?.data.map((author) => ({
		id: author.id,
		name: author.attributes[`prefix_${i18n.language}`] + author.attributes[`name_${i18n.language}`] + ' ' + author.attributes[`surname_${i18n.language}`],
		position: '',//author.attributes.position,
		url: strapiAxios.baseURL + author.attributes.photo.data.attributes.url,
		username: author.attributes.username,
	})) || [];
	const tags = post?.attributes?.tags?.data.map(tag => ({ id: tag.id, name: tag.attributes.name })) || [];
	
	return (
		<Stack sx={{ padding: '50px 20px' }} width={{ xs: '100%', md: 300 }}>
			{/* Author */}
			<SectionTitle title={t('author')} />
			<Box>
				{authors.map(item => <AuthorAvatar name={item.name}
				                                   subject={item.position}
				                                   key={item.id}
				                                   src={item.url}
				                                   member={item.username}
				/>)}
			</Box>
			
			{/* Tag */}
			<SectionTitle title={t('tag')} />
			<Stack direction="row" gap={1} flexWrap="wrap">
				{tags.map((item, id) => <Chip label={item.name} key={id} variant="outlined" />)}
			</Stack>
			
			{/* Related */}
			{/* <SectionTitle title={t('related')} />
			<Stack gap={2} width="100%">
				{[1, 2, 3].map((item) =>
					<BlogItem title="Hello"
					          description="this is a dummy text for placeholder only. Egg is born before chicken?"
					          date="2021/10/6"
					          background="https://static.bangkokpost.com/media/content/20200620/c1_1938008_200620092012.jpg"
					/>,
				)}
			</Stack> */}
		</Stack>
	);
};

export default SideBar;