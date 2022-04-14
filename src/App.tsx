// Libraries
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import { Registration } from './pages/registration/Registration';
import { Welcome } from './pages/welcome/Welcome';
import { Login } from './pages/login/Login';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  </BrowserRouter>
);

export { App };
