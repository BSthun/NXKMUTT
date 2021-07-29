import {
	Box,
	Container,
	useTheme,
} from '@material-ui/core';
import React from 'react';
import Navbar from '../_navbar';
import BannerContent from './section/BannerContent';
import FilterContent from './section/FilterContent';
import NewsSection from './section/NewsSection';

const Content = () => {
	const theme = useTheme();
	
	return (
		<Box display="flex" flexDirection="column" alignItems="center" bgcolor="background.default">
			<Navbar />
			<BannerContent />
			<Container maxWidth="lg">
				<Box display="flex" justifyContent="space-between" width="100%">
					<Box flex="1">
						<FilterContent />
					</Box>
					<Box flex="4">
						<NewsSection />
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Content;