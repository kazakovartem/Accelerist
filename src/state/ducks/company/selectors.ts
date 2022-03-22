import { createSelector } from 'reselect';
import { CompanyState } from './types';

const select = (state: CompanyState) => state.company;

function selectAllCompany() {
  return createSelector(select, (state) => state);
}

export default {
  selectAllCompany,
};
