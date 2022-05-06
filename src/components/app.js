import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Donate from '../routes/donate';
import About from '../routes/about';
import Volunteer from '../routes/volunteer'

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<About path="/about"/>
			<Donate path="/donate"/>
			<Volunteer path="/volunteer"/>
		</Router>
		<Footer />
	</div>
)

export default App;
