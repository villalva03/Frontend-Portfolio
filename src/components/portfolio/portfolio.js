import React, { useEffect } from 'react';
import NavBar from '../navBar/navBar';
import './portfolio.css'

function Portfolio() {

    useEffect(() => {
        document.title = "Portfolio - Francisco Villalva"
     }, []);

    return (
        <div className="myPortfolio">
            <NavBar />
            <h1>Soy Portfolio</h1>
        </div>
    );
} 

export default Portfolio;