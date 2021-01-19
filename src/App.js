import React, { useEffect } from 'react';
import NavBar from './components/navBar/navBar';
import './components/navBar/navBar.css';
import './App.css';
import Home from './components/home/home';

function App() {

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
          <p>Puedes seguirme en <a href="https://twitter.com/villalva0310" rel="noreferrer" target="_blank">Twitter</a> y <a href="https://github.com/villalva03" rel="noreferrer" target="_blank">GitHub</a>. Además, aquí está mi <a href="mailto:villalva03@gmail.com" rel="noreferrer" target="_blank">Email</a> y <a href="https://www.linkedin.com/in/francisco-villalva" rel="noreferrer" target="_blank">LinkedIn</a>.</p>
        </footer>
    </div>
  );
}

export default App;
