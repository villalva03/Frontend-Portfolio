import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/navBar';
import "./about.css";
import twitter from '../../twitter.ico';
import gitHub from '../../github.png';
import linkedin from '../../linkedin.ico';
import axios from 'axios';

function About() {
    const [about, setAbout] = useState({});

    useEffect(() => {
        axios({
          method: 'GET',
          url: process.env.REACT_APP_URL_ABOUT
        })
        .then(res => {
          setAbout(res.data[0]); 
        })
      }, [])

    useEffect(() => {
        document.title = "Acerca - Francisco Villalva"
     }, []);

    return (
        <div className="aboutMe">
            <NavBar />
            <div className="content">
                <div className="contentAbout">
                    <h1>Acerca</h1>
                    <p>{about.about01}</p>
                    <p>{about.about02}</p>
                    <p>{about.about03}</p>
                    <h2>¿Quieres hablar?</h2>
                    <p>
                        Si deseas ponerte en contacto, no dudes en comunicarte conmigo
                        a mi <strong><a href={`mailto:${about.mail}`} rel="noreferrer" target="_blank">Email</a></strong>.
                        También puedes enviarme un DM en las redes sociales.
                    </p>
                    <div className="socialAbout">
                        <a href={about.twitter} rel="noreferrer" target="_blank">
                            <img src={twitter} alt="twitter"></img>
                        </a>
                        <a href={about.github} rel="noreferrer" target="_blank">
                            <img src={gitHub} alt="github"></img>
                        </a>
                        <a href={about.linkedin} rel="noreferrer" target="_blank">
                            <img src={linkedin} alt="linkedin"></img>
                        </a>
                    </div>
                </div>
                <div className="contentSkill">
                    <h1>Stack</h1>
                    <p>Estas son las tecnologías que utilizo en mis proyectos:</p>
                    <div className="contentImage">
                    {about.skillIcons && about.skillIcons.map((skillIcons, index) =>
                        <img key={index} className="imgSkill" src={skillIcons} alt="skill-icons"></img>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default About;