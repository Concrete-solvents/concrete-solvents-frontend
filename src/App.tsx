// Libraries
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Redux
import store from '@Features/redux/store';

// Hocs
import { WithAuth } from '@Hocs/withAuth/WithAuth';

// Pages
import { Main } from '@Pages/main/Main';
import { Login } from '@Pages/auth/login/Login';
import { Registration } from '@Pages/auth/registration/Registration';
import { SocialRegistration } from '@Pages/auth/social/SocialRegistration';
import { Welcome } from '@Pages/auth/welcome/Welcome';
import { Profile } from '@Pages/profile/Profile';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="darkTheme">
        <Routes>
          <Route
            path=""
            element={
              <WithAuth>
                <Main />
              </WithAuth>
            }
          />
          <Route path="/auth">
            <Route path="welcome" element={<Welcome />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="social" element={<SocialRegistration />} />
          </Route>
          <Route
            path="/profile/:id"
            element={
              <WithAuth>
                <Profile />
              </WithAuth>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

export { App };
