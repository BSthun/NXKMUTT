import {
	Box,
	Container,
} from '@mui/material';
import { useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import PageBanner from '../components/layout/PageBanner';
import { strapiAxios } from '../utils/axios';
import BlogSection from './components/BlogSection';
import SideBar from './components/SideBar';

const Post = () => {
	const [t] = useTranslation('content');
	const { slug } = useParams();
	const [post, setPost] = useState(null);

	useLayoutEffect(() => {
		// TODO: https://nxkmutt-strapi.bsthun.com/api/publications/?populate=banner&filters[slug][$eq]=${slug}
		strapiAxios
			.get(`/api/publications/?populate=banner,tags,authors.photo&filters[slug][$eq]=${slug}&_limit=-1`)
			.then(({data}) => {
				console.log(data)
				setPost(data.data[0]);
			})
			.catch((error) => {
				
			});
	}, []);

	return (
		<Box display="flex" flexDirection="column" alignItems="center" bgcolor="background.default">
			<PageBanner
				title={'Post'}
				breadcrumbs={[
					{ href: '/', text: 'Home' },
					{ href: '/content', text: t('content') },
				]}
			/>
			<Container maxWidth="lg">
				<Box display="flex" width="100%"flexDirection={{ xs: 'column-reverse', md: 'row' }}>
					<Box md={4}>
						<SideBar post={post}/>
					</Box>
					<Box md={8}>
						<BlogSection post={post}/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Post;