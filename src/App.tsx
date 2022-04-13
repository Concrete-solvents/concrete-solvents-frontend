// Libraries
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import { Registration } from './pages/registration/Registration';
import { Welcome } from './pages/welcome/Welcome';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Welcome />} />
      <Route path="/login" element={<Welcome />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  </BrowserRouter>
);

export { App };
