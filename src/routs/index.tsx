import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectors } from '../state/ducks/ducks';
import LoginContainer from '../components/LoginContainer';
import HeaderMainScreen from '../components/HeaderContent';
import AuthorizationsScreen from '../pages/Authorizations';
import ResetPassword from '../pages/ResetPassword';
import ChangePassword from '../pages/ChangePassword';
import routsConstant from '../types/constant-routs';
import DeckScreen from '../pages/Deck';
import ProspectsScreen from '../pages/Prospects';
import OneProspectsScreen from '../pages/OneProspect';
import FavoritesScreen from '../pages/Favorites';
import CompanyScreen from '../pages/Company';
import SearchScreen from '../pages/Search';

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

            <Route path="/" element={<Navigate to={routsConstant.SIGN_IN} replace />} />

            <Route path="*" element={<Navigate to={routsConstant.SIGN_IN} />} />
          </Route>
        </Routes>
      )}
      {user.isAuthorized && (
        <Routes>
          <Route path="/" element={<HeaderMainScreen />}>
            <Route path={routsConstant.DASHBOARD} element={<DeckScreen />} />

            <Route path={routsConstant.SEARCH} element={<SearchScreen />} />

            <Route path={`${routsConstant.COMPANY}/:id`} element={<CompanyScreen />} />

            <Route path={routsConstant.COMPANY_FAVORITES} element={<FavoritesScreen />} />

            <Route path={routsConstant.PROSPECTS} element={<ProspectsScreen />} />

            <Route path={`${routsConstant.PROSPECTS}/:id`} element={<OneProspectsScreen />} />

            <Route path="/" element={<Navigate to={routsConstant.DASHBOARD} replace />} />

            <Route path="*" element={<Navigate to={routsConstant.DASHBOARD} />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default AllAppRouts;
