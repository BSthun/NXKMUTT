import {
	Box,
	CircularProgress,
	Container,
	Grid,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, {
	useEffect,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import axios from '../../utils/axios';
import MemberItem from '../components/MemberItem';
import Title from '../components/Title';

const MemberSection = () => {
	const classes = useStyles();
	const [, i18n] = useTranslation('home');
	
	const [members, setMembers] = useState(null);
	
	useEffect(() => {
		axios
			.get('/members')
			.then((response) => {
				const data = response.data;
				data.sort((el1, el2) => (el1.id >= el2.id));
				console.log(data);
				setMembers(data);
			})
			.catch((error) => {
				console.log(error.message);
			});
	}, []);
	
	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Title color="#89c934">NX MEMBERS</Title>
				{
					members ?
						<Grid container spacing={4}>
							{
								members.map(
									(el) => (
										<Grid item xs={12} md={4} lg={3} key={el.username}>
											<MemberItem
												name={el[`name_${i18n.language}`]}
												position={el.position}
												photo={el.photo.url}
												link={`/member/${el.id}`}
											/>
										</Grid>
									),
								)
							}
						</Grid> :
						<Box display="flex" justifyContent="center" paddingTop="20px">
							<CircularProgress />
						</Box>
				}
			</Container>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '48px 0',
		backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.default,
	},
}));

export default MemberSection;
