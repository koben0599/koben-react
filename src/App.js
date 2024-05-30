import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profil from './pages/Profil';
import Lettre from './pages/Lettre';
import Experience from './pages/Experience';
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <nav  className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
          <div className="container-fluid">
          <img src="img/image2.jpg" class="rounded-circle" style={{width: '50px', height: '50px'}} alt="..." />
         
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Profil</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/experience">Experience Professionnelle</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/lettre">Lettre de Motivation</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Profil />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/lettre" element={<Lettre />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

