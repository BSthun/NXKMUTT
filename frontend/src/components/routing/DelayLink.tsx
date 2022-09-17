/**
 * Copied from https://gist.github.com/KimPaow/e900d5b9ac4aa483421c6d19f76bb296
 */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import {
	Link,
	useLocation,
	useNavigate,
} from 'react-router-dom';

// Functional link component which delays page navigation
export const DelayLink = ({ delay, onDelayStart, onDelayEnd, replace, to, ...rest }) => {
	let timeout = null;
	let navigate = useNavigate();
	let location = useLocation();
	
	useEffect(() => {
		return () => {
			if (timeout) {
				clearTimeout(timeout);
			}
		};
	}, [timeout]);
	
	const handleClick = (e) => {
		// if trying to navigate to current page stop everything
		if (location?.pathname === to) {
			return;
		}
		
		onDelayStart(e, to);
		
		if (e.defaultPrevented) {
			return;
		}
		
		e.preventDefault();
		
		timeout = setTimeout(() => {
			navigate(to, {
				replace: replace,
			});
			onDelayEnd(e, to);
		}, delay);
	};
	
	return <Link {...rest} to={to} onClick={handleClick} />;
};

DelayLink.propTypes = {
	delay: PropTypes.number,
	onDelayStart: PropTypes.func,
	onDelayEnd: PropTypes.func,
	replace: PropTypes.bool,
	to: PropTypes.string,
};

DelayLink.defaultProps = {
	replace: false,
	delay: 300,
	onDelayStart: () => {
	},
	onDelayEnd: () => {
	},
};

export default DelayLink;
