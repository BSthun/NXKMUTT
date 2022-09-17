import {
	Box,
	Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import {
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import { Link } from 'react-router-dom';
import { strapiAxios } from '../../utils/axios';

const MemberItems = ({ name, position, photo, link }) => {
	const [show, setShow] = useState(false);
	const [height, setHeight] = useState(0);
	const detailBox = useRef();
	
	useLayoutEffect(() => {
		setHeight(detailBox.current.clientHeight);
		
		const onResize = () => {
			setHeight(detailBox.current.clientHeight);
		};
		
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);
	
	const classes = useStyles({
		photo,
		height,
		show,
	});
	
	return (
		<div className={classes.card} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
			<Link to={link}>
				<Box sx={{
					position: 'absolute',
					transition: 'all 0.3s ease-in-out',
					inset: 0,
					background: `linear-gradient(0deg, rgba(8, 8, 8, 1) 0%, rgba(16, 16, 16, 0.1) 70%)`,
					opacity: show ? 1 : 0,
				}}
				/>
				<Box sx={{
					position: 'absolute',
					transition: 'all 0.3s ease-in-out',
					inset: 0,
					background: `linear-gradient(0deg, rgba(4, 4, 4, 1) 0%, rgba(16, 16, 16, 0) 30%)`,
					opacity: show ? 0 : 1,
				}}
				/>
				<div className={classes.box}>
					<Typography variant="h6" color="white">{name}</Typography>
					<Box sx={{ opacity: show ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }} ref={detailBox}>
						<Typography variant="body1" color="white">{position}</Typography>
					</Box>
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
		transition: 'all 0.3s ease-in-out',
		left: 0,
		right: 0,
		bottom: ({ height, show }) => show ? 0 : `-${height}px`,
		padding: '16px',
		height: 'fit-content',
	},
}));
MemberItems.propTypes = {};

export default MemberItems;
