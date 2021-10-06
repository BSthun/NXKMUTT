import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

const BlogItem = ({ title, description, date, background }) => {
		const classes = useStyles({
			background,
		});
		
		return (
			<div className={classes.root}>
				<div className={classes.overlay} />
			
			</div>
		);
	}
;

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		width: '100%',
		height: '100%',
		backgroundImage: ({ background }) => `url(${background})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		borderRadius: theme.spacing(2),
		overflow: 'hidden',
	},
	overlay: {
		position: 'absolute',
		zIndex: 1,
		inset: 0,
		height: '100%',
		maxHeight: 256,
		background: 'linear-gradient(0deg, rgba(5, 5, 5, 1) 0%, rgba(10, 10, 10, 0) 100%)',
	},
}));

BlogItem.propTypes = {};

export default BlogItem;
