import React, { useEffect, useState } from 'react';
import NavBar from './components/navBar/navBar';
import './components/navBar/navBar.css';
import './App.css';
import Home from './components/home/home';
import axios from 'axios';

function App() {

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
    document.title = "Francisco Villalva"
  }, []);

  return (
    <div className="App">
        <NavBar />
        <div className="body">
          <Home />
        </div>
        <footer className="footer">
          <p>Puedes seguirme en <a href={about.twitter} rel="noreferrer" target="_blank">Twitter</a> y <a href={about.github} rel="noreferrer" target="_blank">GitHub</a>. Además, aquí está mi <a href={`mailto:${about.mail}`} rel="noreferrer" target="_blank">Email</a> y <a href={about.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>.</p>
        </footer>
    </div>
  );
}

export default App;
