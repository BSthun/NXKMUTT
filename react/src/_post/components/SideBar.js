import {
	Box,
	Card,
	CardContent,
	Chip,
	Stack,
	Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import AuthorAvatar from './AuthorAvatar';

const SideBar = () => {
	const [t] = useTranslation('content');
	
	return (
		<Box>
			<Stack gap={3}>
				{/* Author */}
				<Typography variant="p" color="textPrimary">{t('author')}</Typography>
				<Box marginLeft={5}>
					{['tine', 'Gun', 'G'].map(item => <AuthorAvatar name={item} subject={'bio'} key={item} />)}
				</Box>
				
				{/* Tag */}
				<Typography variant="p" color="textPrimary">{t('tag')}</Typography>
				<Stack direction="row" gap={1} flexWrap="wrap" marginTop={5}>
					{['asd', 'asdwasd', 'asd', 'd', 'asd', 'as'].map((item, id) => <Chip label={item} key={id} />)}
				</Stack>
				
				{/* Related */}
				<Typography mt={3} variant="p" color="textPrimary">{t('related')}</Typography>
				
				<Stack gap={2} boxSizing="border-box" mr={3}>
					{[1, 2, 3].map(item => <Card key={item}>
						<CardContent>
							<Box minHeight="100px"></Box>
						</CardContent>
					</Card>)}
				</Stack>
			</Stack>
		</Box>
	);
};

export default SideBar;