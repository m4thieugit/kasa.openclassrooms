import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error404 from './pages/Page404/Page404';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} name="Accueil" />
        <Route path="/about" element={<About />} name="A propos" />
        <Route path="*" element={<Error404 />} name="Erreur 404" />
      </Routes>
    </Router>
  </StrictMode>
);