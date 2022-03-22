import { createSelector } from 'reselect';
import { LastLoginState } from './types';

const select = (state: LastLoginState) => state.lastLogin;

function selectLastLogin() {
  return createSelector(select, (state) => state);
}

export default {
  selectLastLogin,
};
