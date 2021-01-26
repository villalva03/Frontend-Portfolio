import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/navBar';
import './portfolio.css';
import axios from 'axios';

function Portfolio() {
    const [portfolio, setPortfolio] = useState({});

    useEffect(() => {
        axios({
          method: 'GET',
          url: process.env.REACT_APP_URL_PORTFOLIO
        })
        .then(res => {
          setPortfolio(res.data); 
        })
      }, [])

    useEffect(() => {
        document.title = "Portfolio - Francisco Villalva"
     }, []);

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
                        <div className="contentPortfolio">
                            <strong><h1>{portfolio.nameProject}</h1></strong>
                            <p>{portfolio.description}</p>
                            <div className="technology">
                                {portfolio.icons && portfolio.icons.map((icons, index) =>
                                    <img key={index} className="imgSTech" src={icons} alt="icons"></img>
                                )}
                            </div>
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
