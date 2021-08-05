import { useMediaQuery } from '@material-ui/core';
import {
	createTheme,
	ThemeProvider,
} from '@material-ui/core/styles';
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
			type: dark ? 'dark' : 'light',
		},
		spacing: 4,
		typography: {
			fontFamily: [
				'NotoSans',
				'NotoSansThai',
				'Arial',
				'Roboto',
				'\'Helvetica Neue\'',
				'sans-serif',
			].join(','),
		},
		shape: {
			borderRadius: 10,
		},
		selectedColor: {
			tag: '#FFB740',
		},
	}), [dark]);
	
	const handlers = {
		toggleDark: () => {
			setDark((dark) => !dark);
		},
	};
	
	return (
		<ThemeContext.Provider value={handlers}>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};
