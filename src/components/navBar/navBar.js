import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navBar.css";
import "../../App.css";

function Navbar(){
    const [clicked, setClicked] = useState(false);
    const [logoName] = useState("{ FranDev }");

    const handleClick = () => {
        setClicked(!clicked);
    }
    return(
        <nav>
            <div className="menuIcon" onClick={handleClick}>
                {clicked 
                ?   <i className="material-icons menu">close</i>
                :   <i className="material-icons menu">dehaze</i>
                }
            </div>
            <div className="logoContent">
                <Link to="/">
                    <div className="home">
                        <p className="logoName">{logoName}</p>
                    </div>
                </Link>
            </div>
            <ul className={clicked ? "navLinks active" : "navLinks"}>
                <li>
                    <Link to="/">
                        <div className="inicio">Inicio</div>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <div className="about">Acerca</div>
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio">
                        <div className="portfolio">Portfolio</div>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <div className="contact">Contacto</div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;