import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>The Community House</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/about">Our Story</Link>
			<Link activeClassName={style.active} href="/events">Events</Link>
			<Link activeClassName={style.active} href="/volunteer">Volunteer</Link>
			<Link activeClassName={style.active} href="/donate">Donate</Link>
		</nav>
	</header>
);

export default Header;
