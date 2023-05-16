import './home.css';

import Lander from './Lander/Lander';
import About from './About/About';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

export default function Home(props){

    return (
        <section id='home' style={{ height:'100%' }}>
            <Lander />
            <About />
            <Skills />
            <Contact />
        </section>
    );
}