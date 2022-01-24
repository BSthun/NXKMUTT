import {
	faFacebook,
	faInstagram,
	faLine,
	faLinkedin,
	faTelegram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
	faGlobe,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Box,
	Card,
	CardContent,
	Stack,
	Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useTheme } from '@mui/styles';

const ProfileSection = ({ title = '{{section_title}}', member, attributes = false }) => {
	//#region MEMBER DATA
	const theme = useTheme();
	const emails = member.attributes.emails;
	const phones = member.attributes.phones;
	const attrs = member.attributes.attrs;
	const socials = member.attributes.socials;
	const socialIcons = {
		facebook: faFacebook,
		twitter: faTwitter,
		telegram: faTelegram,
		line: faLine,
		instagram: faInstagram,
		linkedin: faLinkedin,
		web: faGlobe,
	};
	//#endregion
	//#region COMPONENTS
	const CardTitle =
		<Typography
			variant="h5"
			color="textPrimary"
			fontWeight="600"
			mb={3}
		>
			{title}
		</Typography>;
	
	const AttributeItem = ({ name, value }, index) =>
		<Box key={index}>
			<Typography variant="h6" fontWeight={600} lineHeight={2}>{name}</Typography>
			<Typography
				variant="body1"
				component="div"
				dangerouslySetInnerHTML={{ __html: value.split('\n').join('<br>') }}
			/>
		</Box>;
	
	const EmailItem = ({ email, title }, index) =>
		<Stack direction="row" key={index} mt={1}>
			<Box minWidth={24} alignSelf="center">
				{
					index === 0 &&
					<FontAwesomeIcon icon={faEnvelope} />
				}
			</Box>
			<Typography
				variant="body1"
				component="a"
				target="_blank"
				href={`mailto:${email}`}
				color="textPrimary"
				sx={{ borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.4)}` }}
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
		</Stack>;
	
	const PhoneItem = ({ phone, title }, index) =>
		<Stack direction="row" key={index} mt={1}>
			<Box minWidth={24} alignSelf="center">
				{
					index === 0 &&
					<FontAwesomeIcon icon={faPhone} />
				}
			</Box>
			<Typography
				variant="body1"
				component="a"
				target="_blank"
				href={`tel:${phone}`}
				color="textPrimary"
				sx={{ borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.4)}` }}
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
		</Stack>;
	
	const SocialItem = ({ type, value, link, title }, index) =>
		<Stack direction="row" key={index} mt={1}>
			<Box minWidth={24} alignSelf="center">
				<FontAwesomeIcon icon={socialIcons[type] || socialIcons.web} />
			</Box>
			<Typography
				variant="body1"
				component={link ? 'a' : 'p'}
				target="_blank"
				href={value}
				color="textPrimary"
				sx={link ? { borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.4)}` } : {}}
				lineHeight={1.5}
			>
				{title ? title : value}
			</Typography>
		</Stack>;
	
	const AttributeArea =
		<Stack direction={'column'} gap={2}>
			{attrs.map(AttributeItem)}
		</Stack>;
	
	const ContactArea = <Stack direction={'column'} gap={2}>
		<Box>{emails.map(EmailItem)}</Box>
		<Box>{phones.map(PhoneItem)}</Box>
		<Box>{socials.map(SocialItem)}</Box>
	</Stack>;
	//#endregion
	
	return (
		<Card variant="outlined" sx={{ height: '100%' }}>
			<CardContent>
				{CardTitle}
				{attributes ? AttributeArea : ContactArea}
			</CardContent>
		</Card>
	);
};

export default ProfileSection;