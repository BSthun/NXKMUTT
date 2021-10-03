import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../components/navbar';
import AboutSection from './sections/AboutSection';
import BannerSection from './sections/BannerSection';
import CenterSection from './sections/CenterSection';
import ContactSection from './sections/ContactSection';
import MethodSection from './sections/MethodSection';
import TopicSection from './sections/TopicSection';

const Home = () => {
	return (
		<Box display="flex" flexDirection="column">
			<Navbar />
			<BannerSection />
			<CenterSection />
			<AboutSection />
			<TopicSection />
			<MethodSection />
			<ContactSection />
		</Box>
	);
	
};

export default Home;
