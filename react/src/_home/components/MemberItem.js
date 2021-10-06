import {
	Card,
	CardContent,
	Stack,
	Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';

const MemberItems = ({ name, position, photo, link }) => {
	return (
		<Card variant="outlined" sx={{ height: '100%' }}>
			<Link to={link}>
				<CardContent>
					<Stack alignItems="center">
						<img alt={photo} style={{ borderRadius: 999, width: 192, height: 192, marginBottom: 20 }}
						     src={axios.baseURL + photo}
						/>
						<Typography variant="h5" color="text.primary" textAlign="center">{name}</Typography>
						<Typography variant="h6" color="text.secondary" textAlign="center">{position}</Typography>
					</Stack>
				</CardContent>
			</Link>
		</Card>
	);
};

MemberItems.propTypes = {};

export default MemberItems;
