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
import { strapiAxios } from '../../utils/axios';
import MemberItem from '../components/MemberItem';
import Title from '../components/Title';

const MemberSection = () => {
	const classes = useStyles();
	const [, i18n] = useTranslation('home');
	
	const [members, setMembers] = useState(null);
	
	useEffect(() => {
		strapiAxios
			.get('/api/members?populate=*')
			.then((response) => {
				const data = response.data.data;
				data.sort((el1, el2) => (el1.order >= el2.order));
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
										<Grid item xs={12} md={4} lg={3} key={el.attributes.username}>
											<MemberItem
												name={`${el.attributes[`prefix_${i18n.language}`] || ''} ${el.attributes[`name_${i18n.language}`]} ${el.attributes[`surname_${i18n.language}`]}`}
												position={el.attributes.position}
												photo={el.attributes.photo?.data?.attributes.url}
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
