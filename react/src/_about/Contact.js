import { Stack } from '@mui/material';
import ContactSection from '../_home/sections/ContactSection';
import PageBanner from '../components/layout/PageBanner';

const Contact = () => {
	return (
		<div>
			<PageBanner
				title={'Contact'}
				breadcrumbs={[
					{ href: '/', text: 'Home' },
				]}
			/>
			<Stack alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="background.default">
				<ContactSection />
			</Stack>
		</div>
	);
};

export default Contact;