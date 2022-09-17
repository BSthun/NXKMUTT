import {
	faEnvelope,
	faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Box, Container, darken, lighten, Paper, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import ContactItem from '../components/ContactItem';
import Title from '../components/Title';

const ContactSection = () => {
	const classes = useStyles();
	
	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Title color="#ffab40" /* orange A200 */>CONTACT</Title>
				<Paper className={classes.paper}>
					<iframe
						title="Google Maps"
						className={classes.map}
						loading="lazy"
						allowFullScreen
						src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC-KwXvLe9iwXN1f19OPsdC_KwRshcURtI
						&q=Learning+Institute+KMUTT"
					/>
					<Box flex={1} display="flex" flexDirection="column" justifyContent="center" padding={6}>
						<Typography variant="h5" gutterBottom>NX Neuroscience Center</Typography>
						<Typography variant="body1" gutterBottom>King Mongkut’s University of Technology
							Thonburi</Typography>
						<Typography variant="body1" gutterBottom>126 Phuttha Bucha Rd, Bang Mot, Thung Khru, Bangkok
							10140, Thailand</Typography>
						<ContactItem anchor="tel:+6624708392" fa={faPhoneAlt} text="(+66) 02-470-8392" />
						<ContactItem anchor="mailto:info@kmutt.ac.th" fa={faEnvelope} text="info@kmutt.ac.th" />
					</Box>
				</Paper>
			</Container>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		paddingBottom: 96,
		backgroundColor: theme.palette.mode === 'dark' ? lighten(theme.palette.background.default, 0.05)
			: darken(theme.palette.background.default, 0.03),
	},
	paper: {
		display: 'flex',
		overflow: 'hidden',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
		},
	},
	map: {
		height: 400,
		flex: 1,
		border: 0,
		filter: theme.palette.mode === 'dark' ? 'invert(90%)' : 'none',
	},
}));

export default ContactSection;
