import {
	faAdjust,
	faEnvelope,
	faHome,
	faLanguage,
	faPenAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
	Box,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React, {
	useContext,
	useEffect,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../contexts/ThemeContext';
import logoOrig from '../../images/logo_orig.png';
import NavbarButton from './NavbarButton';
import NavbarToggle from './NavbarToggle';

const Navbar = () => {
	const { toggle } = useContext(ThemeContext);
	const [scrolled, setScrolled] = useState(false);
	const [t, i18n] = useTranslation('home');
	
	const classes = useStyles({
		height: 64,
		scrolled: scrolled,
	});
	
	useEffect(() => {
		// Bind path scroll event
		window.addEventListener('scroll', onScroll);
		
		return () => {
			// Clear scroll event binding
			window.removeEventListener('scroll', onScroll);
		};
	});
	
	const onScroll = () => {
		if (window.pageYOffset > 100) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};
	
	return (
		<Box className={classes.outer}>
			<Box className={classes.inner}>
				<Box display="flex" alignItems="center">
					<img className={classes.logo} alt="NX KMUTT Logo" src={logoOrig} />
					<Typography color="textPrimary" variant="h5">NX Center KMUTT</Typography>
				</Box>
				<Box display="flex" alignItems="center">
					<NavbarButton to="/home" fa={faHome} text={t('home')} />
					<NavbarButton to="/blog" fa={faPenAlt} text={t('publication')} />
					<NavbarButton to="/blog" fa={faEnvelope} text={t('contact')} />
					<NavbarToggle
						fa={faAdjust}
						tooltip={t('toggledarktheme')}
						onClick={() => {
							toggle();
						}}
					/>
					<NavbarToggle
						fa={faLanguage}
						tooltip={t('switchlanguage')}
						onClick={() => {
							i18n.changeLanguage(i18n.language === 'en' ? 'th' : 'en');
						}}
					/>
				</Box>
			</Box>
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	outer: (props) => ({
		height: props.height,
		width: '100%',
		position: 'fixed',
		top: 0,
		backgroundColor: props.scrolled ? theme.palette.background.paper : 'transparent',
		boxShadow: props.scrolled ? '0px 2.5px 5px 0px rgba(0, 0, 0, 0.24)' : 'none',
		transition: '0.3s all',
	}),
	inner: (props) => ({
		height: '100%',
		maxWidth: 1200,
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	}),
	logo: (props) => ({
		width: 72,
		marginRight: theme.spacing(2),
	}),
}));

export default Navbar;
