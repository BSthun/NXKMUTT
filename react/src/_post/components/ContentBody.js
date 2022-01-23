import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	alpha,
	Box,
	Typography,
} from '@mui/material';
import { useTheme } from '@mui/styles';
import {
	useMemo,
	useState,
} from 'react';
import Markdown from '../../components/markdown/Markdown';
import { strapiAxios } from '../../utils/axios';
import Reference from './Reference';

const ContentBody = ({ post }) => {
	const theme = useTheme();
	const [loaded, setLoaded] = useState(false);
	
	const thumbnail = post?.attributes?.banner?.data?.attributes?.formats?.thumbnail?.url;
	const realThumbnail = post?.attributes?.banner?.data?.attributes?.url;
	const files = post?.attributes?.files;
	const links = post?.attributes?.links;
	
	const readingTime = useMemo(() => {
		const words = post?.attributes?.content.split(' ').length;
		return Math.ceil(words / 200);
	}, [post]);
	
	const markdownStyle = {
		width: '100%',
		display: 'block',
		'& img': {
			width: '100%',
			borderRadius: '10px',
		},
		'& h1,h2,h3,h4,h5,h6,p, blockquote': {
			marginBottom: '1.5rem',
		},
		'& blockquote *': {
			marginBottom: 0,
		},
		'& ul, ol li': {
			marginLeft: '16px',
		},
	};
	
	return (
		<Box color={theme.palette.text.primary}
		     sx={{
			     padding: '40px 20px',
			     [theme.breakpoints.up('md')]: {
				     borderLeft: `1px ${alpha(
					     theme.palette.text.secondary,
					     0.24)} solid`,
			     },
		     }}
		>
			<Typography variant="h4">{post?.attributes.title}</Typography>
			<Typography variant="body1" mt={2} color="textSecondary" fontWeight={600}>
				<FontAwesomeIcon icon={faCalendarAlt}
				                 style={{ marginRight: '.5rem' }}
				/> {post?.attributes.published} · {readingTime} mins read
			</Typography>
			
			<Box mt={10} sx={markdownStyle}>
				<Box
					sx={{
						marginBottom: '1.5rem',
						overflow: 'hidden',
						width: '100%',
						position: 'relative',
						borderRadius: '10px',
					}}
				>
					<img
						src={strapiAxios.baseURL + thumbnail}
						style={{ width: '100%', filter: 'blur(10px)', transform: 'scale(1.1)' }}
						alt={post?.attributes.banner?.data?.attributes?.alternativeText}
					/>
					<img
						loading="lazy"
						src={strapiAxios.baseURL + realThumbnail}
						onLoad={() => setLoaded(true)}
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							opacity: loaded ? 1 : 0,
							transition: 'opacity 1s ease-in-out',
						}}
						alt={post?.attributes.banner?.data?.attributes?.alternativeText}
					/>
				</Box>
				<Markdown className="markdown">{post?.attributes?.content}</Markdown>
				<Reference files={files} links={links}/>
			</Box>
		</Box>
	);
};

export default ContentBody;