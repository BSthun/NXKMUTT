import { Box } from '@material-ui/core';
import React from 'react';
import Navbar from './navbar';
import BannerSection from './sections/BannerSection';
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
