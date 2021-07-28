import { Box } from '@material-ui/core';
import React from 'react';
import Navbar from '../_navbar';
import BannerContent from './section/BannerContent';

const Content = () => {
	return (
		<Box display="flex" flexDirection="column">
			<Navbar />
			<BannerContent />
		</Box>
	);
};

export default Content;