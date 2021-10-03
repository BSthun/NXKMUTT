import { useMediaQuery } from '@mui/material';
import {
	createTheme,
	StyledEngineProvider,
	ThemeProvider,
} from '@mui/material/styles';
import {
	createContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const [dark, setDark] = useState(prefersDarkMode);
	
	useEffect(() => {
		setDark(prefersDarkMode);
	}, [prefersDarkMode]);
	
	const theme = useMemo(() => createTheme({
		palette: {
			mode: dark ? 'dark' : 'light',
		},
		spacing: 4,
		typography: {
			fontFamily: [
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
			setDark((dark) => !dark);
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
