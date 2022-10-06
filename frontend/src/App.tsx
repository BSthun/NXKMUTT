import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import About from './_about/About'
import Content from './_content/Content'
import Event from './_event/Event'
import EventDetail from './_event/EventDetail'
import Home from './_home/Home'
import Member from './_member/Member'
import Post from './_post/Post'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { FloatingContextProvider } from './contexts/FloatingContext'
import { ThemeContextProvider } from './contexts/ThemeContext'
import './locales'
import './styles'

const App = () => {
	return (
		<ThemeContextProvider>
			<FloatingContextProvider>
				<ParallaxProvider>
					<BrowserRouter>
						<Navbar />
						<Routes>
							<Route
								path="/"
								element={<Navigate to="/home" replace />}
							/>
							<Route path="/home" element={<Home />} />
							<Route path="/event" element={<Event />} />
							<Route
								path="/event/:slug"
								element={<EventDetail />}
							/>
							<Route path="/content" element={<Content />} />
							<Route path="/about" element={<About />} />
							<Route path="/post/:slug" element={<Post />} />
							<Route
								path="/member/:username"
								element={<Member />}
							/>
						</Routes>
						<Footer />
					</BrowserRouter>
				</ParallaxProvider>
			</FloatingContextProvider>
		</ThemeContextProvider>
	)
}

export default App
