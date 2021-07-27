import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import ImgEggwave from '../../images/download/eegwave.jpeg';
import MethodItem from '../components/MethodItem';

const MethodSection = () => {
	return (
		<div>
			<MethodItem image={ImgEggwave} fa={faAddressCard} title="EEG" subtitle="Perfect anyway" />
		</div>
	);
};

export default MethodSection;
