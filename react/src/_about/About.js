import { Stack } from '@mui/material';
import ContactSection from '../_home/sections/ContactSection';
import MemberSecion from '../_home/sections/MemberSection';
import PageBanner from '../components/layout/PageBanner';
import { useScroll } from '../utils/scroll';

const About = () => {
	useScroll();
	
	return (
		<div>
			<PageBanner
				title={'About'}
				breadcrumbs={[
					{ href: '/', text: 'Home' },
				]}
			/>
			<Stack justifyContent="center" bgcolor="background.default">
				<MemberSecion />
				<ContactSection />
			</Stack>
		</div>
	);
};

export default About;