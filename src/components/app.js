import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Donate from '../routes/donate';
import About from '../routes/about';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<About path="/about"/>
			<Donate path="/donate"/>
		</Router>
	</div>
)

export default App;
