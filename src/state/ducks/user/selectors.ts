import { createSelector } from 'reselect';
import { UserState } from './types';

const select = (state: UserState) => state.user;

function selectUser() {
  return createSelector(select, (state) => state);
}

export default {
  selectUser
};
