import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Privacy from './pages/privacy/privacy';
import Terms from './pages/terms/terms';
import Endless from './pages/endless/endless';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-conditions" element={<Terms />} />
       <Route path="/endless-runner-game" element={<Endless />} />
    </Routes>
  );
}

export default App;
