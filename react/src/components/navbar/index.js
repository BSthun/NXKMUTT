import {
	faAdjust,
	faBars,
	faCalendarAlt,
	faEnvelope,
	faHome,
	faLanguage,
	faPenAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Backdrop,
	Box,
	Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
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
	const { toggleDark } = useContext(ThemeContext);
	const [options, setOptions] = useState({
		scrolled: false,
		drawer: false,
	});
	const [t, i18n] = useTranslation('home');
	const classes = useStyles(options);
	
	useEffect(() => {
		// Bind path scroll event
		window.addEventListener('scroll', onScroll);
		
		return () => {
			// Clear scroll event binding
			window.removeEventListener('scroll', onScroll);
		};
	});
	
	const onScroll = () => {
		if (window.pageYOffset > 100 && !options.scrolled) {
			setOptions(options => ({
				...options,
				scrolled: true,
			}));
		} else if (window.pageYOffset <= 100 && options.scrolled) {
			setOptions(options => ({
				...options,
				scrolled: false,
			}));
		}
	};
	
	const toggleDrawer = () => {
		setOptions(options => ({
			...options,
			drawer: !options.drawer,
		}));
	};
	
	return (
		<div className={classes.outer}>
			<div className={classes.inner}>
				<div onClick={toggleDrawer} className={classes.hamburger}>
					<FontAwesomeIcon icon={faBars} />
				</div>
				<Backdrop open={options.drawer} onClick={toggleDrawer} />
				<Box display="flex" alignItems="center">
					<img className={classes.logo} alt="NX KMUTT Logo" src={logoOrig} />
					<Typography color="textPrimary" variant="h5">NX Neurosci Center @ KMUTT</Typography>
				</Box>
				<div className={classes.drawer}>
					<NavbarButton to="/home" fa={faHome} text={t('home')} />
					<NavbarButton to="/event" fa={faCalendarAlt} text={t('event')} />
					<NavbarButton to="/content" fa={faPenAlt} text={t('content')} />
					<NavbarButton to="/about" fa={faEnvelope} text={t('about')} />
					<Box display="flex">
						<NavbarToggle
							fa={faAdjust}
							tooltip={t('toggledarktheme')}
							onClick={toggleDark}
						/>
						<NavbarToggle
							fa={faLanguage}
							tooltip={t('switchlanguage')}
							onClick={() => {
								i18n.changeLanguage(i18n.language === 'en' ? 'th' : 'en');
							}}
						/>
					</Box>
				</div>
			</div>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	outer: {
		height: theme.spacing(16),
		width: '100%',
		position: 'fixed',
		top: 0,
		zIndex: 900,
		backgroundColor: ({ scrolled }) => scrolled ? theme.palette.background.paper : 'transparent',
		boxShadow: ({ scrolled }) => scrolled ? '0px 3px 5px 0px rgba(0, 0, 0, 0.24)' : 'none',
		transition: '0.3s all',
	},
	inner: {
		height: '100%',
		maxWidth: theme.breakpoints.values.lg,
		padding: `0 ${theme.spacing(6)}`,
		margin: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	hamburger: {
		display: 'none',
		position: 'absolute',
		zIndex: 993,
		left: ({ drawer }) => drawer ? theme.spacing(46) : theme.spacing(1),
		fontSize: 24,
		color: theme.palette.text.primary,
		padding: theme.spacing(3),
		transition: '.3s ease-in-out',
		[theme.breakpoints.down('md')]: {
			display: 'block',
		},
	},
	drawer: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			alignItems: 'center',
		},
		[theme.breakpoints.down('md')]: {
			position: 'fixed',
			zIndex: 922,
			padding: `${theme.spacing(14)} ${theme.spacing(6)}`,
			top: 0,
			left: ({ drawer }) => drawer ? 0 : -240,
			width: theme.spacing(48),
			height: '100vh',
			flexDirection: 'column',
			alignItems: 'stretch',
			backgroundColor: theme.palette.background.paper,
			// ! Removed due to no obvious effect of shadow when open along with backdrop
			// boxShadow: props.drawer ? `0px 0px ${theme.spacing(2)} 0px rgba(0, 0, 0, 0.36)` : 'none',
			transition: '.3s ease-in-out',
		},
	},
	logo: {
		width: theme.spacing(32),
		marginRight: theme.spacing(2),
		[theme.breakpoints.down('md')]: {
			marginLeft: theme.spacing(6),
		},
	},
}));

export default Navbar;
