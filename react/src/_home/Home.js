import { Box } from '@material-ui/core';
import React from 'react';
import Navbar from '../_navbar';
import BannerSection from './sections/BannerSection';
import CenterSection from './sections/CenterSection';
import MethodSection from './sections/MethodSection';
import MissionSection from './sections/MissionSection';

const Home = () => {
	return (
		<Box display="flex" flexDirection="column">
			<Navbar />
			<BannerSection />
			<CenterSection />
			<MissionSection />
			<MethodSection />
		</Box>
	);
	
};

export default Home;
