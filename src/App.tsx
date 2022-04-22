// Libraries
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Redux
import store from '@Features/redux/store';

// Pages
import { Registration } from '@Pages/registration/Registration';
import { Welcome } from '@Pages/welcome/Welcome';
import { Login } from '@Pages/login/Login';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export { App };
