import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Stack, Typography } from '@mui/material'

const ContactIcon = ({ icon, children }) => {
	return (
		<Grid
			item
			xs={4}
		>
			<Stack
				direction="row"
				gap={5}
				flex="1"
			>
				<Typography color="text.primary">
					{' '}
					<FontAwesomeIcon icon={icon} />{' '}
				</Typography>
				<Typography color="text.primary"> {children} </Typography>
			</Stack>
		</Grid>
	)
}

export default ContactIcon
