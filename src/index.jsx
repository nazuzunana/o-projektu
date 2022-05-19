import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './style.css';
import Projekt from './Projekt';
import Mydve from './Mydve';
import Main from './Main';

const App = () => (
  <div className="container">
    <header>
      <h1>O projektu Booklog</h1>
    </header>
    <main>
      <nav>
        <Link to="/">Hlavní stránka</Link>
        <Link to="/projekt">O projektu</Link>
        <Link to="/mydve">Vik a Zuz</Link>
      </nav>
      <Outlet />
    </main>
    <footer>
      <p>Vytvořeno pro Czechitas - Digitální akademie web Praha 2022</p>
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
      </Route>
    </Routes>
  </BrowserRouter>,
);
