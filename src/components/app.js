import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Donate from '../routes/donate';
import About from '../routes/about';
import Volunteer from '../routes/volunteer';
import Events from '../routes/events';

const App = () => (
	<div id="app">
		<Header />
			<Router>
				<Home path="/" />
				<About path="/about"/>
				<Donate path="/donate"/>
				<Volunteer path="/volunteer"/>
				<Events path="/events"/>
			</Router>
		<Footer />
	</div>
)

export default App;
