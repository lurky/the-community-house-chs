import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<div class={style.logo}>
			<img src='./assets/icons/logo.jpg' height={300} width={300} />
		</div>
	</div>
);

export default Home;
