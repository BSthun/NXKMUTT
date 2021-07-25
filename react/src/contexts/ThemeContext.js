import { useMediaQuery } from '@material-ui/core';
import {
	createMuiTheme,
	ThemeProvider,
} from '@material-ui/core/styles';
import {
	createContext,
	useState,
} from 'react';

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
	const [dark, setDark] = useState(useMediaQuery('(prefers-color-scheme: dark)'));
	
	const theme = createMuiTheme({
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
	});
	
	const handlers = {
		toggleDark: () => {
			setDark((dark) => !dark);
		},
		isDark: dark,
	};
	
	return (
		<ThemeContext.Provider value={handlers}>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};
