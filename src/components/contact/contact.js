import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/navBar';
import './contact.css';
import axios from 'axios';

function Contact() {
    const [contacto, setContacto] = useState({});

    useEffect(() => {
        axios({
          method: 'GET',
          url: process.env.REACT_APP_URL_CONTACT
        })
        .then(res => {
          setContacto(res.data[0]); 
        })
      }, [])

    useEffect(() => {
        document.title = "Contacto - Francisco Villalva"
     }, []);

    return (
        <div className="myContact">
            <NavBar />
            <div className="contentContact">
                <div className="containerContact">
                    <div className="cardContact">
                        <div className="imageContact">
                            <a href={contacto.twitter} rel="noreferrer" target="_blank">
                                <img src={contacto.iconTwitter} alt="imagen-proyecto"></img>
                            </a>
                        </div>
                        <h1>Twitter</h1>
                    </div>
                    <div className="cardContact">
                        <div className="imageContact">
                            <a href={contacto.github} rel="noreferrer" target="_blank">
                                <img src={contacto.iconGithub} alt="imagen-proyecto"></img>
                            </a>
                        </div>
                        <h1>GitHub</h1>
                    </div>
                    <div className="cardContact">
                        <div className="imageContact">
                            <a href={contacto.linkedin} rel="noreferrer" target="_blank">
                                <img src={contacto.iconLinkedin} alt="imagen-proyecto"></img>
                            </a>
                        </div>
                        <h1>Linkedin</h1>
                    </div>
                    <div className="cardContact">
                        <div className="imageContact">
                            <a href={`mailto:${contacto.mail}`} rel="noreferrer" target="_blank">
                                <img src={contacto.iconMail} alt="imagen-proyecto"></img>
                            </a>
                        </div>
                        <h1>Email</h1>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default Contact;
