import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectors } from '../state/ducks/ducks';
import LoginContainer from '../components/LoginContainer';
import AuthorizationsScreen from '../pages/Authorizations';
import DeckScreen from '../pages/Deck';
import ResetPassword from '../pages/ResetPassword';
import ChangePassword from '../pages/ChangePassword';
import routsConstant from '../types/constant-routs';

const AllAppRouts = () => {
  const user = useSelector(selectors.user.selectUser());

  return (
    <>
      {!user.isAuthorized && (
        <Routes>
          <Route path="/" element={<LoginContainer />}>
            <Route path={routsConstant.SIGN_IN} element={<AuthorizationsScreen />} />

            <Route path={routsConstant.SIGN_UP} element={<AuthorizationsScreen />} />

            <Route path={routsConstant.SEND_MAIL} element={<ResetPassword />} />

            <Route path={routsConstant.CHANGE_PASSWORD} element={<ChangePassword />} />

            <Route path="/" element={<Navigate to={routsConstant.SIGN_IN} />} />
          </Route>
        </Routes>
      )}
      {user.isAuthorized && (
        <Routes>
          <Route path="/" element={<LoginContainer />}>
            <Route path={routsConstant.DASHBOARD} element={<DeckScreen />} />

            <Route path={routsConstant.SEARCH} element={<DeckScreen />} />

            <Route path={routsConstant.COMPANY} element={<DeckScreen />} />

            <Route path={routsConstant.COMPANY_FAVORITES} element={<DeckScreen />} />

            <Route path={routsConstant.PROSPECTS} element={<DeckScreen />} />

            <Route path="/" element={<Navigate to="/dashboard" />} />

            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default AllAppRouts;
