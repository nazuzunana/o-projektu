import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './style.css';
import Projekt from './Projekt/Projekt.jsx';
import Mydve from './Mydve/Mydve.jsx';
import Main from './Main/Main.jsx';
import Kontakt from './Kontakt/Kontakt.jsx';

const App = () => (
  <div className="container">
    <header>
      <h1>Záverečný projekt Digitální akademie Czechitas</h1>
    </header>
    <main>
      <nav>
        <Link to="/">Hlavní stránka</Link>
        <Link to="/projekt">O projektu</Link>
        <Link to="/mydve">Vik a Zuz</Link>
        <Link to="/kontakt">Kontakt</Link>
      </nav>
      <Outlet />
    </main>
    <footer>
      <p> © 2022, Všechna práva vyhrazena</p>
      <p> Czechitas: Digitální akademie web 2022</p>
    </footer>
  </div>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Main />} />
        <Route path="projekt" element={<Projekt />} />
        <Route path="mydve" element={<Mydve />} />
        <Route path="kontakt" element={<Kontakt />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
