import { useTheme } from '@emotion/react';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	alpha,
	Card,
	CardContent,
	Grid,
	Stack,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { strapiAxios } from '../../utils/axios';

const Reference = ({ files = [], links = [] }) => {
	const theme = useTheme();
	
	const FileLists = () => <Stack direction="column" gap={2} mt={2}>
		{files.map((file, idx) => <Box key={file.id}>•<Typography
			component="a"
			target="_blank"
			href={strapiAxios.baseURL + file.file.data.attributes.url}
			title={strapiAxios.baseURL + file.file.data.attributes.url}
			sx={{
				borderBottom: `1px solid ${theme.palette.text.primary}`,
				paddingLeft: '.25rem',
				paddingRight: '.25rem',
				marginLeft: '.25rem',
				marginRight: '.25rem',
				borderRadius: '5px 5px 0 0',
				transition: 'background .2s ease-in-out, padding-left .2s ease-in-out, padding-right .2s ease-in-out',
				'&:hover': {
					background: alpha(theme.palette.text.primary, 0.1),
					paddingLeft: '1rem',
					paddingRight: '1rem',
				},
			}}
		>
			{file.title}
		</Typography></Box>)}
	
	</Stack>;
	
	const FileReferences = () => <Card variant="outlined" sx={{ height: '100%' }}>
		<CardContent>
			<Typography variant="h6" component="div"
			            color="textPrimary"
			            fontWeight="600"
			>
				<FontAwesomeIcon icon={faFile} style={{ marginRight: '.5rem' }} /> {'Files'}
			</Typography>
			<FileLists />
		</CardContent>
	</Card>;
	
	const LinkLists = () =>
		<Stack direction="column" gap={2} mt={2}>
			{
				links.map((link, idx) =>
					<Box key={link.id}>•
						<Typography
							component="a"
							target="_blank"
							href={link.link}
							title={link.link}
							sx={{
								borderBottom: `1px solid ${theme.palette.text.primary}`,
								paddingLeft: '.25rem',
								paddingRight: '.25rem',
								marginLeft: '.25rem',
								marginRight: '.25rem',
								borderRadius: '5px 5px 0 0',
								transition: 'background .2s ease-in-out, padding-left .2s ease-in-out, padding-right .2s ease-in-out',
								'&:hover': {
									background: alpha(theme.palette.text.primary, 0.1),
									paddingLeft: '1rem',
									paddingRight: '1rem',
								},
							}}
						>
							{link.title}
						</Typography>
					</Box>)
			}
		
		</Stack>;
	
	const LinkReferences = () => <Card variant="outlined" sx={{ height: '100%' }}>
		<CardContent>
			<Typography variant="h6" component="div"
			            color="textPrimary"
			            fontWeight="600"
			>
				<FontAwesomeIcon icon={faLink} style={{ marginRight: '.5rem' }} /> {'Links'}
			</Typography>
			<LinkLists />
		</CardContent>
	</Card>;
	
	return <Grid container spacing={5} mt={1}>
		{files.length > 0 && <Grid item md={6} xs={12} children={<FileReferences />} />}
		{links.length > 0 && <Grid item md={6} xs={12} children={<LinkReferences />} />}
	</Grid>;
};

export default Reference;