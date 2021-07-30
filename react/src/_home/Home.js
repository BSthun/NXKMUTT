import { Box } from '@material-ui/core';
import React from 'react';
import Navbar from '../_navbar';
import AboutSection from './sections/AboutSection';
import BannerSection from './sections/BannerSection';
import CenterSection from './sections/CenterSection';
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
		</Box>
	);
	
};

export default Home;
