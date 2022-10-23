// Libraries
import { GroupsPage } from '@Pages/groups/GroupsPage';
import { Main } from '@Pages/main/Main';
import { FriendsPage } from '@Pages/users/friendsPage/FriendsPage';
import { UserProfilePage } from '@Pages/users/userProfilePage/UserProfilePage';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Redux
import store from '@Features/redux/store';

// Hocs
import { WithAuth } from '@Common/hocs/withAuth/WithAuth';

// Pages
import { Login } from '@Pages/auth/login/Login';
import { Registration } from '@Pages/auth/registration/Registration';
import { SocialRegistration } from '@Pages/auth/social/SocialRegistration';
import { Welcome } from '@Pages/auth/welcome/Welcome';
import { UserEditPage } from '@Pages/users/userEdit/UserEditPage';
import { ChatPage } from '@Pages/chat/ChatPage';

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
            path="/chat"
            element={
              <WithAuth>
                <ChatPage />
              </WithAuth>
            }
          />
          <Route
            path="/groups"
            element={
              <WithAuth>
                <GroupsPage />
              </WithAuth>
            }
          />
          <Route
            path="/users/:id/friends"
            element={
              <WithAuth>
                <FriendsPage />
              </WithAuth>
            }
          />
          <Route
            path="/users/:userId"
            element={
              <WithAuth>
                <UserProfilePage />
              </WithAuth>
            }
          />
          <Route
            path="/users/:userId/edit"
            element={
              <WithAuth>
                <UserEditPage />
              </WithAuth>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

export { App };
