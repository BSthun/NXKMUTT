import {
	Box,
	CircularProgress,
	Grid,
	Pagination,
	Stack,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import SectionTitle from '../../components/layout/SectionTitle';
import { strapiAxios } from '../../utils/axios';
import { useQuery } from '../../utils/hooks';
import BlogItem from '../components/BlogItem';

const Feed = () => {
	const classes = useStyles();
	const [t] = useTranslation('content');
	const [posts, setPosts] = useState([]);
	const [features, setFeatures] = useState({});
	const [pageCount, setPageCount] = useState(1);
	const query = useQuery();
	const router = useHistory();
	const [page,setPage] = useState(1);

	const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
	const highlightIndex = shuffle([0,1,2,3,4]);

	const fetchPosts = async () => {
		strapiAxios
			.get(`/api/publications?populate=banner&pagination[page]=${~~(query.get('page') || 1)}&pagination[pageSize]=6`)
			.then(({ data }) => {
				setPosts(data.data);
				setPageCount(data.meta.pagination.pageCount);
			})
			.catch((error) => {
				console.log(error.message);
			});

		strapiAxios.get(`/api/featured-content?populate=publication1.p.banner,publication2.p.banner,publication3.p.banner,publication4.p.banner,publication5.p.banner`)
			.then(({ data }) => {
				setFeatures(data.data);
			}).catch((error) => {
				console.log(error.message);
			});
	};

	const featured = useMemo(() => {
		return [1,2,3,4,5].map((i) => {	
			return features.attributes && features.attributes['publication' + i].p.data.attributes;
		})
	}, [features]);

	useEffect(() => {
		fetchPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[page]);

	const setNewPage = (e,page) => {
		router.push(`/content/?q=${""}&page=${page}`);
		setPage(page);
		fetchPosts();
	};
	
	return (
		<div className={classes.section}>
			<SectionTitle title={t('featured')} />
			<Box display="flex"
			     flexDirection={{ xs: 'column', md: 'row' }}
			     minHeight={600}
			>
				<Stack spacing={2} flex={1}>
					<Box flex={1}>
						<BlogItem title={featured[0]?.title}
						          description={featured[0]?.desc}
						          date={featured[0]?.published}
						          background={strapiAxios.baseURL + featured[0]?.banner?.data?.attributes?.url}
								  index={highlightIndex[0]}
								  to={'/post/' + featured[0]?.slug}
						          height
						/>
					</Box>
					<Box flex={1}>
					<BlogItem title={featured[1]?.title}
						          description={featured[1]?.desc}
						          date={featured[1]?.published}
						          background={strapiAxios.baseURL + featured[1]?.banner?.data?.attributes?.url}
								  index={highlightIndex[1]}
								  to={'/post/' + featured[1]?.slug}
						          height
						/>
					</Box>
				</Stack>
				<Box width={8} height={8} />
				<Stack spacing={2} flex={1}>
					<Box flex={1}>
						<BlogItem title={featured[2]?.title}
						          description={featured[2]?.desc}
						          date={featured[2]?.published}
						          background={strapiAxios.baseURL + featured[2]?.banner?.data?.attributes?.url}
								  index={highlightIndex[2]}
								  to={'/post/' + featured[2]?.slug}
						          height
						/>
					</Box>
					<Box flex={1}>
						<BlogItem title={featured[3]?.title}
						          description={featured[3]?.desc}
						          date={featured[3]?.published}
						          background={strapiAxios.baseURL + featured[3]?.banner?.data?.attributes?.url}
								  index={highlightIndex[3]}
								  to={'/post/' + featured[3]?.slug}
						          height
						/>
					</Box>
					<Box flex={1}>
						<BlogItem title={featured[4]?.title}
						          description={featured[4]?.desc}
						          date={featured[4]?.published}
						          background={strapiAxios.baseURL + featured[4]?.banner?.data?.attributes?.url}
								  index={highlightIndex[4]}
								  to={'/post/' + featured[4]?.slug}
						          height
						/>
					</Box>
				</Stack>
			</Box>
			{/* <SectionTitle title={t('blog')} />
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
			</Box> */}
			<SectionTitle title={t('latest')} />
			{ posts ? <Grid container spacing={2}>
				{posts.map((item,index) => <Grid key={`post:`+item.id} item md={6} sm={12}>
					<BlogItem  title={item?.attributes?.title}
							description={item?.attributes?.desc}
							date={item?.attributes?.published}
							background={strapiAxios.baseURL + item?.attributes?.banner?.data?.attributes?.url}
							to={`/post/${item?.attributes?.slug}`}
							index={index}
					/>
				</Grid>
				)}
			</Grid> : <Box><CircularProgress/></Box>}

			<Box display="flex" justifyContent="center" mt={10}>
				<Pagination count={pageCount} page={page} onChange={setNewPage} variant="outlined"/>
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