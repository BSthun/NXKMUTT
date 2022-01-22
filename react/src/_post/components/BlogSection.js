import { useLayoutEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';
import { strapiAxios } from '../../utils/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

const BlogSection = ({ post }) => {
	const theme = useTheme();
	
	// const banner = post.attributes?.banner.data.attributes;

	const markdownStyle = {
		width: '100%',
		display:'block',
		'& img': {
			width: '100%',
			borderRadius: '5px',
		},
		'& > h1': {
			marginTop: '1.5rem',
			marginBottom: '1.5rem',
		},
		'& > p': {
			marginTop: '1.5rem',
		}
	};

	const calculateReadingTime = (text="") => {
		const words = text.split(' ').length;
		const minutes = Math.ceil(words / 200);
		return minutes;
	}

	return (
		<Box color={theme.palette.text.primary} padding={5}>
			<Typography variant='h3'>{post?.attributes.title}</Typography>
			<Typography variant='body1' mt={2} color="textSecondary" fontWeight={600}>
				<FontAwesomeIcon icon={faCalendarAlt} style={{marginRight: '.5rem'}}/> {post?.attributes.published} • { calculateReadingTime(post?.attributes?.content) } mins read
			</Typography>

			<Box mt={10} sx={markdownStyle} mt={10}>
				<img src={strapiAxios.baseURL + post?.attributes?.banner?.data?.attributes?.url}></img>
				<ReactMarkdown>
					{post ? post.attributes.content : 'Loading...'}
				</ReactMarkdown>
			</Box>
		</Box>
	);
};

export default BlogSection;