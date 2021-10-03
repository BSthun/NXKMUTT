import { Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';
import CenterCard from './CenterCard';

const Title = ({ children, color }) => {
	const classes = useStyles({ color });
	
	return (
		<Typography variant="h5" className={classes.title}>{children}</Typography>
	);
};

const useStyles = makeStyles((theme) => ({
	title: {
		margin: '32px 0',
		textAlign: 'center',
		fontWeight: 500,
		color: ({ color }) => color,
	},
}));

CenterCard.propTypes = {
	children: PropTypes.array,
};

export default Title;
