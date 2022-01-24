import {
	Chip,
	Stack,
	Typography,
} from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/layout/SectionTitle';
import { strapiAxios } from '../../utils/axios';
import AuthorAvatar from './AuthorAvatar';

const NoInfo = () => {
	return (
		<Typography variant="small1" color="text.secondary">No information</Typography>
	);
};

const ContentSidebar = ({ post }) => {
	const [t, i18n] = useTranslation('content');
	
	const authors = post?.attributes?.authors?.data.map((author) => ({
		id: author.id,
		name: author.attributes[`prefix_${i18n.language}`] + ' ' + author.attributes[`name_${i18n.language}`] + ' ' + author.attributes[`surname_${i18n.language}`],
		position: '',//author.attributes.position,
		url: strapiAxios.baseURL + author.attributes.photo.data.attributes.url,
		username: author.attributes.username,
	})) || [];
	
	const [typeTag, techniqueTag, themeTag] = useMemo(() => {
		const tags = post.attributes?.tags.data?.map(tag => ({
			id: tag.id,
			name: tag.attributes.name,
			category: tag.attributes.category,
		})) || [];
		
		return [
			tags.filter((item) => item.category === 'type'),
			tags.filter((item) => item.category === 'technique'),
			tags.filter((item) => item.category === 'theme'),
		];
	}, [post]);
	
	return (
		<Stack sx={{ padding: '24px 20px' }} width={{ xs: 'calc(100% - 40px)', md: 300 }}>
			{/* Author */}
			<SectionTitle title={t('author')} />
			<Stack direction="column" gap={2}>
				{
					authors.length > 0 ?
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
						: <NoInfo />
				}
			</Stack>
			
			{/* Tag */}
			<SectionTitle title={t('type')} />
			<Stack direction="row" gap={1} flexWrap="wrap">
				{
					typeTag.length > 0 ?
						typeTag.map(
							(item, id) => <Chip label={item.name} key={id} variant="outlined" />,
						)
						: <NoInfo />
				}
			</Stack>
			
			<SectionTitle title={t('technique')} />
			<Stack direction="row" gap={1} flexWrap="wrap">
				{
					techniqueTag.length > 0 ?
						techniqueTag.map(
							(item, id) => <Chip label={item.name} key={id} variant="outlined" />,
						)
						: <NoInfo />
				}
			</Stack>
			
			<SectionTitle title={t('theme')} />
			<Stack direction="row" gap={1} flexWrap="wrap">
				{
					themeTag.length > 0 ?
						themeTag.map(
							(item, id) => <Chip label={item.name} key={id} variant="outlined" />,
						)
						: <NoInfo />
				}
			</Stack>
		</Stack>
	);
};

export default ContentSidebar;