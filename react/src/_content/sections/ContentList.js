import {
	Box,
	CircularProgress,
	Grid,
	Pagination,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import React, {
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import SectionTitle from '../../components/layout/SectionTitle';
import { FloatingContext } from '../../contexts/FloatingContext';
import { strapiAxios } from '../../utils/axios';
import { useQuery } from '../../utils/hooks';
import BlogItem from '../components/BlogItem';

const Feed = () => {
	const query = useQuery();
	const history = useHistory();
	const classes = useStyles();
	const { openSnackBar } = useContext(FloatingContext);
	const [t] = useTranslation('content');
	const [posts, setPosts] = useState([]);
	const [pageCount, setPageCount] = useState(1);
	
	const [page, result] = useMemo(() => {
		return [
			~~(query.get('page')) || 1,
			query.get('result') || '',
		];
		
	}, [query]);
	
	const fetchPosts = () => {
		const query = result &&
			result
				.split(',')
				.reduce((str, el, index) => {
					return str + `&filters[id][$in][${index}]=${el}`;
				}, '');
		strapiAxios
			.get(`/api/publications?populate=banner&pagination[page]=${page}&pagination[pageSize]=6${query}`)
			.then(({ data }) => {
				setPosts(data.data);
				setPageCount(data.meta.pagination.pageCount);
			})
			.catch((error) => {
				openSnackBar(error.message);
			});
	};
	
	useEffect(() => {
		fetchPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, result]);
	
	const setPage = (e, page) => {
		history.replace(`/content/?result=${result}&page=${page}`);
	};
	
	return (
		<div className={classes.section}>
			<SectionTitle title={result ? t('search_result') : t('all_posts')} />
			{posts ? <Grid container spacing={2}>
				{posts.map((item, index) => <Grid key={`post:` + item.id} item md={6} sm={12}>
						<BlogItem
							title={item?.attributes?.title}
							description={item?.attributes?.desc}
							date={item?.attributes?.published}
							background={strapiAxios.baseURL + item?.attributes?.banner?.data?.attributes?.url}
							to={`/post/${item?.attributes?.slug}`}
							index={index}
						/>
					</Grid>,
				)}
			</Grid> : <Box><CircularProgress /></Box>}
			
			<Box display="flex" justifyContent="center" mt={10}>
				<Pagination count={pageCount} page={page} onChange={setPage} variant="outlined" />
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