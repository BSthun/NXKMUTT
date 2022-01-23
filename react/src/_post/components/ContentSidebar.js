import {
	Chip,
	Stack,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/layout/SectionTitle';
import { strapiAxios } from '../../utils/axios';
import AuthorAvatar from './AuthorAvatar';

const ContentSidebar = ({ post }) => {
	const [t, i18n] = useTranslation('content');
	
	const authors = post?.attributes?.authors?.data.map((author) => ({
		id: author.id,
		name: author.attributes[`prefix_${i18n.language}`] + ' ' + author.attributes[`name_${i18n.language}`] + ' ' + author.attributes[`surname_${i18n.language}`],
		position: '',//author.attributes.position,
		url: strapiAxios.baseURL + author.attributes.photo.data.attributes.url,
		username: author.attributes.username,
	})) || [];
	
	const tags = post?.attributes?.tags?.data.map(tag => ({
		id: tag.id,
		name: tag.attributes.name,
		category: tag.attributes.category,
	})) || [];
	
	return (
		<Stack sx={{ padding: '24px 20px' }} width={{ xs: '100%', md: 300 }}>
			{/* Author */}
			<SectionTitle title={t('author')} />
			<Stack direction="column" gap={2}>
				{
					authors.map(
						item =>
							<AuthorAvatar
								name={item.name}
								subject={item.position}
								key={item.id}
								src={item.url}
								member={item.username}
							/>,
					)
				}
			</Stack>
			
			{/* Tag */}
			<SectionTitle title={t('type')} />
			<Stack direction="row" gap={1} flexWrap="wrap">
				{
					tags
						.filter((item) => item.category === 'type')
						.map(
							(item, id) => <Chip label={item.name} key={id} variant="outlined" />,
						)
				}
			</Stack>
			
			<SectionTitle title={t('technique')} />
			<Stack direction="row" gap={1} flexWrap="wrap">
				{
					tags
						.filter((item) => item.category === 'technique')
						.map(
							(item, id) => <Chip label={item.name} key={id} variant="outlined" />,
						)
				}
			</Stack>
			
			<SectionTitle title={t('theme')} />
			<Stack direction="row" gap={1} flexWrap="wrap">
				{
					tags
						.filter((item) => item.category === 'theme')
						.map(
							(item, id) => <Chip label={item.name} key={id} variant="outlined" />,
						)
				}
			</Stack>
		</Stack>
	);
};

export default ContentSidebar;