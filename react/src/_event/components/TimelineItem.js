import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faLaptopMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Chip,
	Grid,
	Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, {
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import { strapiAxios } from '../../utils/axios';

/*
 Position:
  - 1: First element
  - 2: Between element
  - 3: Last element
 */

const formatDateDDMMYYYY = (date) => {
	const d = new Date(date);
	const month = `${d.getMonth() + 1}`.padStart(2, '0');
	const day = `${d.getDate()}`.padStart(2, '0');
	const year = d.getFullYear();
	return `${day}/${month}/${year}`;
};

const TimelineItem = ({ position, name, date, desc, event }) => {
	const classes = useStyles();
	const startDate = formatDateDDMMYYYY(event.attributes.start);
	const endDate = formatDateDDMMYYYY(event.attributes.end);
	const previewImage = useRef(null);
	const content = useRef(null);
	const [height, setHeight] = useState(0);
	const [, setGHeight] = useState(0);
	const [show, setShow] = useState(false);
	
	useLayoutEffect(() => {
		if (previewImage.current) {
			setHeight(previewImage.current.clientHeight);
		}
		
		if (content.content) {
			setGHeight(content.current.clientHeight);
		}
		
		const handleResize = () => {
			setHeight(previewImage.current.clientHeight);
			setGHeight(content.current.clientHeight);
		};
		
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	
	return (
		<div className={classes.root}>
			<div className={classes.dot} />
			{
				position <= 0 &&
				<div className={classes.lineUpper} />
			}
			{
				position >= 0 &&
				<div className={classes.lineLower} />
			}
			<Box marginLeft={12} marginY={2} width="100%">
				<Card sx={{ width: '100%', height: `${height}px`, overflow: 'hidden', position: 'relative' }}
				      onMouseEnter={() => setShow(true)}
				      onMouseLeave={() => setShow(false)}
				>
					
					<CardMedia ref={previewImage}
					           height="300px"
					           component="img"
					           sx={{
						           width: '100%',
						           top: 0,
						           transform: show ? `scale(1.2)` : `scale(1)`,
						           position: 'absolute',
						           transition: 'transform .3s ease-in-out',
					           }}
					           image={strapiAxios.baseURL + event?.attributes?.banner?.data?.attributes?.url}
					           alt={event?.attributes?.banner?.data?.attributes?.url}
					/>
					<Box sx={{
						position: 'absolute',
						transition: 'all 0.3s ease-in-out',
						inset: 0,
						background: `linear-gradient(0deg, rgba(8, 8, 8, .8) 0%, rgba(16, 16, 16, 0.1) 70%)`,
					}}
					/>
					<CardContent
						ref={content}
						sx={{ width: '100%', bottom: 0, position: 'absolute', boxSizing: 'border-box' }}
					>
						<Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
							<Typography
								variant="span"
								component="span"
								mr={2}
							>
								<FontAwesomeIcon icon={faCalendar} /> {startDate.trim() === endDate.trim() ? startDate : `${startDate} - ${endDate}`}
							</Typography>
							<Chip size="small"
							      sx={{ padding: '.5rem', color: 'white' }}
							      icon={
								      <FontAwesomeIcon
									      style={{ color: 'white', fontSize: '12px' }}
									      icon={faLaptopMedical}
								      />
							      }
							      label={event.attributes.category}
							/>
						</Typography>
						<Grid container sx={{ width: '100%' }}>
							<Grid item xs={12} md={8} sx={{ height: '100%' }}>
								<Box sx={{ height: '100%' }}>
									<Typography variant="h5" component="div" color="white">
										{name}
									</Typography>
									<Typography variant="body2" component="div" color="white">
										{desc}
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={12} md={4}>
								<Box sx={{ height: '100%', display: 'flex', alignItems: 'flex-end' }}>
									<Button
										size="large"
										sx={{
											width: '100%',
											opacity: show ? 1 : 0,
											transition: 'opacity .25s ease-in-out',
										}}
										variant="outlined"
										color="snow"
									>
										Learn more
									</Button>
								</Box>
							</Grid>
						</Grid>
					</CardContent>
				
				</Card>
			</Box>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		display: 'flex',
	},
	lineUpper: {
		position: 'absolute',
		top: 0,
		left: 16,
		width: 1,
		height: 24,
		backgroundColor: theme.palette.text.secondary,
	},
	lineLower: {
		position: 'absolute',
		top: 40,
		left: 16,
		width: 1,
		bottom: 0,
		backgroundColor: theme.palette.text.secondary,
	},
	dot: {
		position: 'absolute',
		top: 24,
		left: 8,
		width: 16,
		height: 16,
		backgroundColor: 'rgb(122, 122, 122)',
		borderRadius: 8,
	},
}));

TimelineItem.propTypes = {};

export default TimelineItem;
