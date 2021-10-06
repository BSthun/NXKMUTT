import {
	BrowserRouter,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './_about/About';
import Content from './_content/Content';
import Event from './_event/Event';
import Home from './_home/Home';
import Member from './_member/Member';
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
							<Route exact path="/home">
								<Home />
							</Route>
							<Route exact path="/event">
								<Event />
							</Route>
							<Route exact path="/content">
								<Content />
							</Route>
							<Route exact path="/about">
								<About />
							</Route>
							<Route path="/post">
								<Post />
							</Route>
							<Route path="/member/:id">
								<Member />
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
