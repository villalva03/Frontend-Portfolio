import React, { useEffect } from 'react';
import NavBar from '../navBar/navBar';
import "./about.css";
import twitter from '../../twitter.ico';
import gitHub from '../../github.png';
import linkedin from '../../linkedin.ico';

function About() {

    useEffect(() => {
        document.title = "Acerca - Francisco Villalva"
     }, []);

    return (
        <div className="aboutMe">
            <NavBar />
            <div className="content">
                <div className="contentAbout">
                    <h1>Acerca</h1>
                    <p>
                        Hola, soy <strong>Francisco Villalva</strong>. 
                        Front-End Developer y Analista Programador Universitario. 
                        He desarrollado y colaborado en un proyecto durante un año.
                    </p>
                    <p>
                        Me considero una persona responsable y comprometida. 
                        Entusiasta y autodidacta, dispuesto a aprender y desenvolverme 
                        de la mejor manera posible en nuevas tecnologías, que me permita 
                        crecer profesionalmente.
                    </p>
                    <p>
                        Lo que más me gusta de la programación es dar soluciones a 
                        problemas que aparentemente son complicados.
                    </p>
                    <h2>¿Quieres hablar?</h2>
                    <p>
                        Si deseas ponerte en contacto, no dudes en comunicarte conmigo
                        a mi <strong><a href="mailto:villalva03@gmail.com" rel="noreferrer" target="_blank">Email</a></strong>.
                        También puedes enviarme un DM en las redes sociales.
                    </p>
                    <div className="socialAbout">
                        <a href="https://twitter.com/villalva0310" rel="noreferrer" target="_blank">
                            <img src={twitter} alt="twitter"></img>
                        </a>
                        <a href="https://github.com/villalva03" rel="noreferrer" target="_blank">
                            <img src={gitHub} alt="github"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/francisco-villalva" rel="noreferrer" target="_blank">
                            <img src={linkedin} alt="linkedin"></img>
                        </a>
                    </div>
                </div>
                <div className="contentSkill">
                    <h1>Skill</h1>
                </div>
            </div>
        </div>
    );
} 

export default About;