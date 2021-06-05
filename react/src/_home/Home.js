import React from 'react';
import BannerSection from './sections/BannerSection';
import Navbar from './navbar';
import { Box } from '@material-ui/core';
import MissionSection from './sections/MissionSection';

const Home = () => {
	return (
		<Box display="flex" flexDirection="column">
			<Navbar />
			<BannerSection />
			<MissionSection />
		</Box>
	);
	
};

export default Home;
