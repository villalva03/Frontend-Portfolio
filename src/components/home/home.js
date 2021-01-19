import React from 'react';
import './home.css';
import avatar from '../../../src/avatar.jpg';

function Home() {
    return(
        <div className="contentHome">
            <div className="avatar">
                <div className="avatarImg">
                    {/*<img src="https://avatars2.githubusercontent.com/u/47070998?s=460&u=51e01cc4696c409021db6069a36830f8790eb1d6&v=4"></img>*/}
                    <img className="imgSize" src={avatar} alt="vatar"></img>
                </div>
            </div>
            <div className="name">
                <h3>Hola, soy</h3>
                <h1>Francisco Villalva</h1>
                <h2>Front-end Developer</h2>
            </div>
        </div>
    );
}

export default Home;