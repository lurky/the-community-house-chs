import { h } from 'preact';
import style from './style.css';

const About = () => (
    <div className={style.about}>
        <div className={style.aboutFounders}>
            <img src='./assets/icons/founders.png' />
        </div>
        <div class={style.aboutMission}>
            <h1>Our Mission</h1>
            <p>At vis agam oportere. Dicam accusamus ut has. Ad dicunt platonem voluptaria sed, phaedrum mnesarchum cu his. Vel convenire appellantur at, quaeque recteque dignissim qui at.

                Nec exq aliquip graecis. 
                
                    <br/>
                    Eu viris malorum alienum pri, eu eruditi nonumes dissentiet eos. Qui ridens adipisci suscipiantur te, eos no purto ferri utamur. Usu at labores repudiandae, mei cu quod eirmod, usu suscipit assueverit ne. Nam id officiis dissentiet, ne quot putent ius. An eam docendi disputando suscipiantur, ea natum minim prodesset mei, eos et virtute petentium.

            </p>
        </div>
    </div>
);

export default About;