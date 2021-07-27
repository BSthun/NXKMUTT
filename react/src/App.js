import {
	BrowserRouter,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import Content from './_content/Content';
import Home from './_home/Home';
import { FloatingContextProvider } from './contexts/FloatingContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import './locales';
import './styles';

const App = () => {
	return (
		<ThemeContextProvider>
			<FloatingContextProvider>
				<BrowserRouter>
					<Switch>
						<Route exact path="/">
							<Redirect to={{ pathname: '/home' }} />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/content">
							<Content />
						</Route>
					</Switch>
				</BrowserRouter>
			</FloatingContextProvider>
		</ThemeContextProvider>
	);
};

export default App;
