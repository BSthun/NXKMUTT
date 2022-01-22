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

const ProfileSection = ({ title = '{{section_title}}', member, attributes = false }) => {
	//#region MEMBER DATA
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
		<Typography variant="h6" component="div"
		            color="textPrimary"
		            fontWeight="600"
		>
			{title}
		</Typography>;
	
	const AttributeItem = ({ name, value }) =>
		<Typography variant="p" component="div" color="textPrimary">
			<Box>
				<Typography variant="b" component="b">{name}</Typography>
				<Typography variant="body2"
				            component="div"
				            dangerouslySetInnerHTML={{ __html: value.split('\n').join('<br>') }}
				/>
			</Box>
		</Typography>;
	
	const EmailItem = ({ email, title }, index) =>
		<Typography variant="p" component="div" color="textPrimary">
			<FontAwesomeIcon icon={faEnvelope} style={{ minWidth: '2rem', opacity: index > 0 ? 0 : 1 }} />
			{email}
			{
				emails.length > 1 &&
				<Typography variant="b"
				            component="span"
				            color="textPrimary"
				            style={{ opacity: '.5' }}
				>
					• {title}
				</Typography>
			}
		</Typography>;
	
	const PhoneItem = ({ phone, title }, index) =>
		<Typography variant="p" component="div" color="textPrimary">
			<FontAwesomeIcon icon={faPhone} style={{ minWidth: '2rem', opacity: index > 0 ? 0 : 1 }} />
			{phone}
			{
				emails.length > 1 &&
				<Typography variant="b"
				            component="span"
				            color="textPrimary"
				            style={{ opacity: '.5' }}
				>
					• {title}
				</Typography>}
		</Typography>;
	
	const SocialItem = ({ type, value, link, title }, index) =>
		<Typography variant="p" component="div" color="textPrimary">
			<FontAwesomeIcon icon={socialIcons[type] || socialIcons.web} style={{ minWidth: '2rem' }} />
			{
				title ?
					<a href={value} target="_blank" rel="noreferrer">{title}</a>
					:
					link ? <a href={value} target="_blank" rel="noreferrer">{value}</a> : value
			}
			{
				emails.length > 1 &&
				<Typography variant="b"
				            component="span"
				            color="textPrimary"
				            style={{ opacity: '.5', textTransform: 'capitalize' }}
				>
					• {type}
				</Typography>
			}
		</Typography>;
	//#endregion
	//#region CONDITION AREA
	const AttributeArea =
		<Stack direction={'column'} gap={2}>
			{attrs.map(AttributeItem)}
		</Stack>;
	
	const ContackArea = <Stack direction={'column'} gap={2}>
		<Box>{emails.map(EmailItem)}</Box>
		<Box>{phones.map(PhoneItem)}</Box>
		<Box>{socials.map(SocialItem)}</Box>
	</Stack>;
	//#endregion
	
	return (
		<Card variant="outlined" sx={{ height: '100%' }}>
			<CardContent>
				{CardTitle}
				{attributes ? AttributeArea : ContackArea}
			</CardContent>
		</Card>
	);
};

export default ProfileSection;