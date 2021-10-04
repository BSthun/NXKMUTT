import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Box,
	Card,
	CardContent,
	Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

/*
 Position:
  - 1: First element
  - 2: Between element
  - 3: Last element
 */

const TimelineItem = ({ position, name, date, desc }) => {
	const classes = useStyles();
	
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
				<Card sx={{ width: '100%' }}>
					<CardContent>
						<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							<FontAwesomeIcon icon={faCalendar} />&nbsp; {date} &nbsp; • &nbsp;
							<FontAwesomeIcon icon={faHashtag} />&nbsp; {date}
						</Typography>
						<Typography variant="h5" component="div">
							{name}
						</Typography>
						<Typography variant="body2">
							{desc}
						</Typography>
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
