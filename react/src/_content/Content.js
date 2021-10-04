import {
	Box,
	Container,
} from '@mui/material';
import React from 'react';
import BannerContent from './section/BannerContent';
import FilterContent from './section/FilterContent';
import NewsSection from './section/NewsSection';

const Content = () => {
	
	return (
		<Box display="flex" flexDirection="column" alignItems="center" bgcolor="background.default">
			<BannerContent />
			<Container maxWidth="lg">
				<Box display="flex"
				     justifyContent="space-between"
				     width="100%"
				     flexDirection={{ xs: 'column', md: 'row' }}
				>
					<Box flex="1" overflow="hidden" marginBottom={10} >
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