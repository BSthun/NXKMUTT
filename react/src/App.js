import {
	BrowserRouter,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Content from './_content/Content';
import Event from './_event/Event';
import Home from './_home/Home';
import Post from './_post/Post';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { FloatingContextProvider } from './contexts/FloatingContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import './locales';
import './styles';

const App = () => {
	return (
		<ThemeContextProvider>
			<FloatingContextProvider>
				<ParallaxProvider>
					<BrowserRouter>
						<Navbar />
						<Switch>
							<Route exact path="/">
								<Redirect to={{ pathname: '/home' }} />
							</Route>
							<Route path="/home">
								<Home />
							</Route>
							<Route path="/event">
								<Event />
							</Route>
							<Route exact path="/content">
								<Content />
							</Route>
							<Route path="/content/post">
								<Post />
							</Route>
						</Switch>
						<Footer />
					</BrowserRouter>
				</ParallaxProvider>
			</FloatingContextProvider>
		</ThemeContextProvider>
	);
};

export default App;
