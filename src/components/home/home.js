import React from 'react';
import './home.css';

function Home({ name, profession, avatar }) {
    return(
        <div className="contentHome">
            <div className="avatar">
                <div className="avatarImg">
                    <img className="imgSize" src={avatar} alt="vatar"></img>
                </div>
            </div>
            <div className="name">
                <h3>Hola, soy</h3>
                <h1>{name}</h1>
                <h2>{profession}</h2>
            </div>
        </div>
    );
}

export default Home;