import React from 'react';
import './home.css';

// "iconCss": "https://icongr.am/devicon/css3-original-wordmark.svg",
        // "iconReact": "https://icongr.am/devicon/react-original-wordmark.svg",
        // "iconGit": "https://icongr.am/devicon/git-original.svg",
        // "iconMaterialUi": "https://material-ui.com/static/logo.png"

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