import {
	Box,
	Container,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageBanner from '../components/layout/PageBanner';
import BlogSection from './components/BlogSection';
import SideBar from './components/SideBar';

const Post = () => {
	const [t] = useTranslation('content');
	
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
				<Box display="flex"
				     width="100%"
				     flexDirection={{ xs: 'column-reverse', md: 'row' }}
				>
					<SideBar />
					<Box flex="4">
						<BlogSection />
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Post;