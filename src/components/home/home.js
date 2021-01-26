import React from 'react';
import './home.css';
import avatar from '../../avatar.jpg'

function Home() {
    return(
        <div className="contentHome">
            <div className="avatar">
                <div className="avatarImg">
                    <img className="imgSize" src={avatar} alt="vatar"></img>
                </div>
            </div>
            <div className="name">
                <h3>Hola, soy</h3>
                <h1>Francisco Villalva</h1>
                <h2>Front-End Developer</h2>
            </div>
        </div>
    );
}

export default Home;