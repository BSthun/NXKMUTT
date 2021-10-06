import {
	Avatar,
	Box,
	Stack,
	Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import axios from '../../utils/axios';

const ProfileSideBar = ({ member }) => {
	const [, i18n] = useTranslation('home');
	
	return (
		<Box width={{ xs: '100%', md: 256 }} margin="52px 20px">
			<Stack gap={3} mt={5}>
				<Avatar src={axios.baseURL + member.photo.url} style={{ width: '100%', height: '100%' }} />
				<Stack gap={0}>
					<Typography variant="h5"
					            textAlign="center"
					            color="text.primary"
					>{member[`name_${i18n.language}`]}</Typography>
					<Typography textAlign="center" color="text.primary">{member.position}</Typography>
				</Stack>
			</Stack>
		</Box>
	);
};

export default ProfileSideBar;