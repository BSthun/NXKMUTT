import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { Box } from '@material-ui/core';
import React from 'react';
import ImgEggwave from '../../images/download/eegwave.jpeg';
import MethodItem from '../components/MethodItem';

const MethodSection = () => {
	return (
		<Box bgcolor="background.default" position="relative">
			<Box position="absolute">
				<MethodItem image={ImgEggwave} fa={faAddressCard} title="EEG" subtitle="Perfect anyway" />
			</Box>
		</Box>
	);
};

export default MethodSection;
