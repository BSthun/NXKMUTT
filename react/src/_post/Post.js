import {
	Box,
	Container,
} from '@mui/material';
import {
	useContext,
	useLayoutEffect,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import PageBanner from '../components/layout/PageBanner';
import { FloatingContext } from '../contexts/FloatingContext';
import { strapiAxios } from '../utils/axios';
import ContentBody from './components/ContentBody';
import ContentSidebar from './components/ContentSidebar';
const Post = () => {
	const [t] = useTranslation('content');
	const [post, setPost] = useState(null);
	const { openSnackBar } = useContext(FloatingContext);
	const { slug } = useParams();
	
	useLayoutEffect(() => {
		strapiAxios
			.get(`/api/publications/?populate=banner,links,files.file,tags,authors.photo&filters[slug][$eq]=${slug}&_limit=-1`)
			.then(({data}) => {
				console.log(data)
				setPost(data.data[0]);
			})
			.catch((error) => {
				openSnackBar(error.toString());
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [slug]);
	
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
				<Box display="flex" width="100%" flexDirection={{ xs: 'column-reverse', md: 'row' }}>
					<Box md={3}>
						<ContentSidebar post={post} />
					</Box>
					<Box md={9}>
						<ContentBody post={post} />
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Post;