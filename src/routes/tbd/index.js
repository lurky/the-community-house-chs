import { h } from 'preact';
import style from './style.css';

const tbd = () => (
	<div class={style.tbd}>
		<div class={style.logo}>
			<img src='./assets/icons/logo.PNG'/>
		</div>
        <div class={style.msg}>
                <h1>Coming Soon...</h1>
        </div>
	</div>
);

export default tbd;
