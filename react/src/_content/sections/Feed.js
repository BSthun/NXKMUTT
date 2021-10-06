import {
	Box,
	Stack,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/layout/SectionTitle';
import BlogItem from '../components/BlogItem';

const Feed = () => {
	const classes = useStyles();
	const [t] = useTranslation('content');
	
	return (
		<div className={classes.section}>
			<SectionTitle title={t('featured')} />
			<Box display="flex"
			     flexDirection={{ xs: 'column', md: 'row' }}
			     minHeight={600}
			>
				<Stack spacing={2} flex={1}>
					<Box flex={1}>
						<BlogItem title="Hello"
						          description="this is a dummy text for placeholder only. Egg is born before chicken?"
						          date="2021/10/6"
						          background="https://static.bangkokpost.com/media/content/20200620/c1_1938008_200620092012.jpg"
						          height
						/>
					</Box>
					<Box flex={1}>
						<BlogItem title="Hello"
						          description="this is a dummy text for placeholder only. Egg is born before chicken?"
						          date="2021/10/6"
						          background="https://static.bangkokpost.com/media/content/20200620/c1_1938008_200620092012.jpg"
						          height
						/>
					</Box>
				</Stack>
				<Box width={8} height={8} />
				<Stack spacing={2} flex={1}>
					<Box flex={1}>
						<BlogItem title="Hello"
						          description="this is a dummy text for placeholder only. Egg is born before chicken?"
						          date="2021/10/6"
						          background="https://static.bangkokpost.com/media/content/20200620/c1_1938008_200620092012.jpg"
						          height
						/>
					</Box>
					<Box flex={1}>
						<BlogItem title="Hello"
						          description="this is a dummy text for placeholder only. Egg is born before chicken?"
						          date="2021/10/6"
						          background="https://static.bangkokpost.com/media/content/20200620/c1_1938008_200620092012.jpg"
						          height
						/>
					</Box>
					<Box flex={1}>
						<BlogItem title="Hello"
						          description="this is a dummy text for placeholder only. Egg is born before chicken?"
						          date="2021/10/6"
						          background="https://static.bangkokpost.com/media/content/20200620/c1_1938008_200620092012.jpg"
						          height
						/>
					</Box>
				</Stack>
			</Box>
			<SectionTitle title={t('blog')} />
			<Box width={300}>
				<BlogItem title="Hello"
				          description="this is a dummy text for placeholder only. Egg is born before chicken?"
				          date="2021/10/6"
				          background="https://static.bangkokpost.com/media/content/20200620/c1_1938008_200620092012.jpg"
				/>
			</Box>
			<SectionTitle title={t('paper')} />
			<Box width={300}>
				<BlogItem title="Hello"
				          description="this is a dummy text for placeholder only. Egg is born before chicken?"
				          date="2021/10/6"
				          background="https://static.bangkokpost.com/media/content/20200620/c1_1938008_200620092012.jpg"
				/>
			</Box>
			<SectionTitle title={t('publication')} />
			<Box width={300}>
				<BlogItem title="Hello"
				          description="this is a dummy text for placeholder only. Egg is born before chicken?"
				          date="2021/10/6"
				          background="https://static.bangkokpost.com/media/content/20200620/c1_1938008_200620092012.jpg"
				/>
			</Box>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	section: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		padding: '50px 20px',
		[theme.breakpoints.up('md')]: {
			borderLeft: `1px ${alpha(theme.palette.text.secondary, 0.24)} solid`,
		},
	},
}));

export default Feed;