import { h } from 'preact';
import style from './style.css';

const Volunteer = () => (
	<div>
		<h1>The Volunteer Page</h1>
        <form>
            <label for='name'>Name:</label>
            <input id='name' type='text'/>

            <button type='submit'></button>
        </form>
	
	</div>
);

export default Volunteer;
