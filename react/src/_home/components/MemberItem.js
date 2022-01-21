import { Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { Link } from 'react-router-dom';
import { strapiAxios } from '../../utils/axios';

const MemberItems = ({ name, position, photo, link }) => {
	const classes = useStyles({
		photo,
	});
	
	return (
		<div className={classes.card}>
			<Link to={link}>
				<div className={classes.overlay} />
				<div className={classes.box}>
					<Typography variant="h6" color="white">{name}</Typography>
					<Typography variant="body1" color="white">{position}</Typography>
				</div>
			</Link>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	card: {
		position: 'relative',
		width: '100%',
		paddingTop: '127%',
		backgroundImage: ({ photo }) => `url(${strapiAxios.baseURL + photo})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		borderRadius: theme.spacing(2),
		overflow: 'hidden',
		display: 'flex',
	},
	box: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		padding: '16px',
		height: 'fit-content',
	},
	overlay: {
		position: 'absolute',
		inset: 0,
		background: 'linear-gradient(0deg, rgba(5, 5, 5, 1) 0%, rgba(10, 10, 10, 0) 50%)',
	},
}));
MemberItems.propTypes = {};

export default MemberItems;
