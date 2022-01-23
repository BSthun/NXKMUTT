import { useMediaQuery } from '@mui/material';
import {
	createTheme,
	StyledEngineProvider,
	ThemeProvider,
} from '@mui/material/styles';
import {
	createContext,
	useEffect,
	useLayoutEffect,
	useMemo,
	useState,
} from 'react';

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const [dark, setDark] = useState(prefersDarkMode);
	useEffect(() => {
		setDark(localStorage.getItem('theme') == null ? prefersDarkMode : localStorage.getItem('theme') === 'dark');
	}, [prefersDarkMode]);

	useLayoutEffect(() => {
		document.body.classList.remove('theme-dark','theme-light');
		document.body.classList.add(dark ? 'theme-dark' : 'theme-light');
	},[dark]);
	
	const theme = useMemo(() => createTheme({
		palette: {
			mode: dark ? 'dark' : 'light',
		},
		spacing: 4,
		typography: {
			fontFamily: [
				'Lato',
				'NotoSans',
				'NotoSansThai',
				'Arial',
				'Roboto',
				'sans-serif',
			].join(','),
		},
		shape: {
			borderRadius: 10,
		},
		selectedColor: {
			selected: '#FFB740',
			tag: {
				lightTag: '#EEEEEE',
				darkTag: '#2B2B2B',
			},
		},
	}), [dark]);
	
	const handlers = {
		toggleDark: () => {
			setDark((dark) => {
				localStorage.setItem('theme', !dark ? 'dark' : 'light');
				return !dark;
			});
		},
	};
	
	return (
		<ThemeContext.Provider value={handlers}>
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme}>
					{children}
				</ThemeProvider>
			</StyledEngineProvider>
		</ThemeContext.Provider>
	);
};
