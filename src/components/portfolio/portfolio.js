import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/navBar';
import './portfolio.css';
import axios from 'axios';

function Portfolio() {
    const [portfolio, setPortfolio] = useState({});

    useEffect(() => {
        axios({
          method: 'GET',
          url: 'http://localhost:8080/portfolio'
        })
        .then(res => {
          setPortfolio(res.data); 
        })
      }, [])

    useEffect(() => {
        document.title = "Portfolio - Francisco Villalva"
     }, []);

    //  <div className="mega-card-portfolio">
    //             { portfolio.length > 0 && portfolio.map((portfolio, index) => 
    //                 <div className="individual-card">
    //                     <h1>{portfolio.nameProject}</h1>
    //                     <img className="imagen-proyecto" alt="imagen-proyecto" src={portfolio.image}></img>
    //                     <p>{portfolio.description}</p>
    //                     <a className="boton-visitar" href={portfolio.link}>Visitar Proyecto</a>
    //                 </div>
    //             )}
    //         </div>

    return (
        <div className="myPortfolio">
            <NavBar />
            <div className="projects">
                <div className="container">
                { portfolio.length > 0 && portfolio.map((portfolio, index) => 
                    <div className="card" key={index}>
                        <div className="imageBox">
                            <img src={portfolio.image} alt="imagen-proyecto"></img>
                        </div>
                        <div className="content">
                            <strong><h1>{portfolio.nameProject}</h1></strong>
                            <p>{portfolio.description}</p>
                            <div className="btnGroup">
                                <a href={portfolio.link} rel="noreferrer" target="_blank" className="btnPreview">
                                    <strong>Preview</strong>
                                </a>
                                <a href={portfolio.repository} rel="noreferrer" target="_blank" className="btnGit">
                                    <strong>GitHub</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
} 

export default Portfolio;