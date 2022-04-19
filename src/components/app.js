import { h } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Tbd from '../routes/tbd';

const App = () => (
	<div id="app">
		<Router>
			<Tbd path="/" />
		</Router>
	</div>
)

export default App;
