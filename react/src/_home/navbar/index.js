import {
	faAdjust,
	faBars,
	faEnvelope,
	faHome,
	faLanguage,
	faPenAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Backdrop,
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
	const { toggleDark } = useContext(ThemeContext);
	const [options, setOptions] = useState({
		scrolled: false,
		drawer: false,
	});
	const [t, i18n] = useTranslation('home');
	
	const classes = useStyles({
		height: 64,
		...options,
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
			setOptions(options => ({
				...options,
				scrolled: true,
			}));
		} else {
			setOptions(options => ({
				...options,
				scrolled: false,
			}));
		}
	};
	
	const openDrawer = () => {
		setOptions(options => ({
			...options,
			drawer: true,
		}));
	};
	
	const closeDrawer = () => {
		setOptions(options => ({
			...options,
			drawer: false,
		}));
	};
	
	return (
		<Box className={classes.outer}>
			<Box className={classes.inner}>
				<Box position="absolute"
				     fontSize="1.2em"
				     marginLeft="12px"
				     display={{ xs: 'block', md: 'none' }}
				     onClick={openDrawer}
				>
					<FontAwesomeIcon icon={faBars} />
				</Box>
				<Backdrop open={options.drawer} onClick={closeDrawer} />
				<Box display="flex" alignItems="center">
					<img className={classes.logo} alt="NX KMUTT Logo" src={logoOrig} />
					<Typography color="textPrimary" variant="h5">NX Center KMUTT</Typography>
				</Box>
				<Box className={classes.drawer}>
					<NavbarButton to="/home" fa={faHome} text={t('home')} />
					<NavbarButton to="/publication" fa={faPenAlt} text={t('publication')} />
					<NavbarButton to="/contact" fa={faEnvelope} text={t('contact')} />
					<Box display="flex">
						<NavbarToggle
							fa={faAdjust}
							tooltip={t('toggledarktheme')}
							onClick={() => {
								toggleDark();
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
		</Box>
	);
};

const useStyles = makeStyles(
	(theme) => ({
		outer: (props) => ({
			height: props.height,
			width: '100%',
			position: 'fixed',
			top: 0,
			backgroundColor: props.scrolled ? theme.palette.background.paper : 'transparent',
			boxShadow: props.scrolled ? '0px 3px 5px 0px rgba(0, 0, 0, 0.24)' : 'none',
			transition: '0.3s all',
		}),
		inner: (props) => ({
			height: '100%',
			maxWidth: theme.breakpoints.values.lg,
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2),
			margin: 'auto',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
		}),
		drawer: (props) => ({
			display: 'flex',
			[theme.breakpoints.up('sm')]: {
				alignItems: 'center',
			},
			[theme.breakpoints.down('sm')]: (props) => ({
				position: 'fixed',
				zIndex: 922,
				padding: theme.spacing(12),
				top: 0,
				left: props.drawer ? 0 : -(theme.spacing(54) + 2 * theme.spacing(12)),
				width: theme.spacing(54),
				height: '100vh',
				flexDirection: 'column',
				alignItems: 'stretch',
				backgroundColor: theme.palette.background.paper,
				boxShadow: props.drawer ? `0px 0px ${theme.spacing(2)}px 0px rgba(0, 0, 0, 0.36)` : 'none',
				transition: '.3s',
			}),
		}),
		logo: (props) => ({
			width: theme.spacing(12),
			marginRight: theme.spacing(2),
			[theme.breakpoints.down('sm')]: {
				marginLeft: theme.spacing(10),
			},
		}),
	}))
;

export default Navbar;
