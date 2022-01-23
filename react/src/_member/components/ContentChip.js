import {
	Box,
	Stack,
	Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const ContentChip = ({ children, header }) => {
	const [t] = useTranslation('content');
	return (
		<Stack gap={3}>
			<Box p={3} paddingX={15} bgcolor="gray" borderRadius={30} width="fit-content">
				<Typography variant="h6" color="text.primary" width="fit-content"> {t(header)} </Typography>
			</Box>
			<Box paddingX={5} boxSizing="border-box">
				{children}
			</Box>
		</Stack>
	);
};

export default ContentChip;