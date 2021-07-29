import PropTypes from 'prop-types';
import React, {
	useEffect,
	useMemo,
} from 'react';

const BannerParallax = ({ className }) => {
	const id = useMemo(() => 'home-banner-parallax', []);
	
	const handleScroll = () => {
		const offset = window.pageYOffset > window.screen.height ? 0 : window.pageYOffset;
		document.getElementById(id).style.transform = `translate3D(0, ${0.5 * offset}px, 0)`;
	};
	
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
	
	return (
		<div
			id="home-banner-parallax"
			className={className}
		/>
	);
};

BannerParallax.propTypes = {
	className: PropTypes.string.isRequired,
};

export default BannerParallax;
