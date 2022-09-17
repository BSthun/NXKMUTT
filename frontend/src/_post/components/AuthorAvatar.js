import {
	Avatar,
	Box,
	Stack,
	Typography,
} from '@mui/material';
import { useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';

const AuthorAvatar = ({ name, subject, src, member }) => {
	const theme = useTheme();
	
	return (
		<Link to={`/member/${member}`}>
			<Stack
				direction="row"
				alignItems="center"
				padding={2.5}
				gap={2.5}
				sx={{ border: `1px solid ${theme.palette.action.disabled}`, borderRadius: '12px' }}
			>
				<Avatar sx={{ width: 48, height: 48 }}>
					<img src={src} style={{ width: '100%', alignSelf: 'flex-start' }} alt="Author" />
				</Avatar>
				<Box>
					<Typography height="fit-content" color="text.primary" lineHeight={1.1}>{name}</Typography>
					<Typography height="fit-content" fontWeight="light" color="GrayText">{subject}</Typography>
				</Box>
			</Stack>
		</Link>);
	
};

export default AuthorAvatar;