import {
	faFacebook,
	faInstagram,
	faLine,
	faLinkedin,
	faTelegram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { useTheme } from '@mui/styles'
import { useTranslation } from 'react-i18next'

const ContactCard = ({ member }) => {
	const theme = useTheme()
	const emails = member.attributes.emails
	const phones = member.attributes.phones
	const socials = member.attributes.socials
	const socialIcons = {
		facebook: faFacebook,
		twitter: faTwitter,
		telegram: faTelegram,
		line: faLine,
		instagram: faInstagram,
		linkedin: faLinkedin,
		web: faGlobe,
	}

	const EmailItem = ({ email, title }, index) => (
		<Stack
			direction="row"
			alignItems="center"
			key={index}
			mt={1}
		>
			<Box
				minWidth={28}
				alignSelf="center"
			>
				{index === 0 && (
					<FontAwesomeIcon
						icon={faEnvelope}
						style={{ fontSize: 20, marginTop: 6 }}
					/>
				)}
			</Box>
			<Typography
				variant="body1"
				component="a"
				target="_blank"
				href={`mailto:${email}`}
				color="textPrimary"
				sx={{
					borderBottom: `1px solid ${alpha(
						theme.palette.text.primary,
						0.4
					)}`,
				}}
				lineHeight={1.5}
			>
				{email}
			</Typography>
			<Typography
				variant="body1"
				component="span"
				color="textPrimary"
				style={{ opacity: '.5' }}
			>
				&nbsp;· {title}
			</Typography>
		</Stack>
	)

	const PhoneItem = ({ phone, title }, index) => (
		<Stack
			direction="row"
			key={index}
			mt={1}
		>
			<Box
				minWidth={24}
				alignSelf="center"
			>
				{index === 0 && <FontAwesomeIcon icon={faPhone} />}
			</Box>
			<Typography
				variant="body1"
				component="a"
				target="_blank"
				href={`tel:${phone}`}
				color="textPrimary"
				sx={{
					borderBottom: `1px solid ${alpha(
						theme.palette.text.primary,
						0.4
					)}`,
				}}
				lineHeight={1.5}
			>
				{phone}
			</Typography>
			<Typography
				variant="body1"
				component="span"
				color="textPrimary"
				style={{ opacity: '.5' }}
			>
				&nbsp;· {title}
			</Typography>
		</Stack>
	)

	const SocialItem = ({ type, value, link, title }, index) => (
		<Stack
			direction="row"
			key={index}
			mt={1}
		>
			<Box
				minWidth={24}
				alignSelf="center"
			>
				<FontAwesomeIcon
					icon={socialIcons[type] || socialIcons.web}
					style={{ fontSize: 32 }}
				/>
			</Box>
			<Typography
				variant="body1"
				component={link ? 'a' : 'p'}
				target="_blank"
				href={value}
				color="textPrimary"
				sx={
					link
						? {
								borderBottom: `1px solid ${alpha(
									theme.palette.text.primary,
									0.4
								)}`,
						  }
						: {}
				}
				lineHeight={1.5}
			>
				{title ? title : value}
			</Typography>
		</Stack>
	)

	return (
		<Card
			variant="outlined"
			sx={{ height: '100%' }}
		>
			<CardContent>
				<Typography
					variant="h5"
					color="primary"
					fontWeight="600"
					mb={3}
				>
					Contact Information
				</Typography>
				<Stack
					direction={'column'}
					gap={2}
				>
					<Box>{emails.map(EmailItem)}</Box>
					<Box>{phones.map(PhoneItem)}</Box>
					<Box>{socials.map(SocialItem)}</Box>
				</Stack>
			</CardContent>
		</Card>
	)
}

export default ContactCard
