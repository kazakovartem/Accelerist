import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectors } from './state/ducks/ducks';
import AuthorizationsScreen from './navigate/authorizations';
import DeckScreen from './navigate/deck';
import ResetPassword from './navigate/resetPassword';
import ChangePassword from './navigate/changePassword';

function App() {
  const user = useSelector(selectors.user.selectUser());

  return (
    <Router>
      {!user.isAuthorized && (
        <Routes>
          <Route path="/login" element={<AuthorizationsScreen />} />

          <Route path="/register" element={<AuthorizationsScreen />} />

          <Route path="/reset" element={<ResetPassword />} />

          <Route path="/change_password" element={<ChangePassword />} />

          <Route path="/" element={<Navigate to="/login" />} />

        </Routes>
      )}
      {user.isAuthorized && (
        <Routes>
          <Route path="/dashboard" element={<DeckScreen />} />

          <Route path="/search" element={<DeckScreen />} />

          <Route path="/company" element={<DeckScreen />} />

          <Route path="/company-favorites" element={<DeckScreen />} />

          <Route path="/prospects" element={<DeckScreen />} />

          <Route path="/" element={<Navigate to="/dashboard" />} />

          <Route path="/login" element={<Navigate to="/dashboard" />} />

          <Route path="*" element={<DeckScreen />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
