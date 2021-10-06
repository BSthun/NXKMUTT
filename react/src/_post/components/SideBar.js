import {
	Box,
	Chip,
	Stack,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogItem from '../../_content/components/BlogItem';
import SectionTitle from '../../components/layout/SectionTitle';
import AuthorAvatar from './AuthorAvatar';

const SideBar = () => {
	const [t] = useTranslation('content');
	
	return (
		<Stack sx={{ padding: '50px 20px' }} width={{ xs: '100%', md: 300 }}>
			{/* Author */}
			<SectionTitle title={t('author')} />
			<Box>
				{['tine', 'Gun', 'G'].map(item => <AuthorAvatar name={item} subject={'bio'} key={item} />)}
			</Box>
			
			{/* Tag */}
			<SectionTitle title={t('tag')} />
			<Stack direction="row" gap={1} flexWrap="wrap">
				{['asd', 'asdwasd', 'asd', 'd', 'asd', 'as'].map((item, id) => <Chip label={item} key={id} />)}
			</Stack>
			
			{/* Related */}
			<SectionTitle title={t('related')} />
			<Stack gap={2} width="100%">
				{[1, 2, 3].map((item) =>
					<BlogItem title="Hello"
					          description="this is a dummy text for placeholder only. Egg is born before chicken?"
					          date="2021/10/6"
					          background="https://static.bangkokpost.com/media/content/20200620/c1_1938008_200620092012.jpg"
					/>,
				)}
			</Stack>
		</Stack>
	);
};

export default SideBar;