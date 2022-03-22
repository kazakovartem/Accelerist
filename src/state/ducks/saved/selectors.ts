import { createSelector } from 'reselect';
import { SavedState } from './types';

const select = (state: SavedState) => state.savedList;

function selectAllSaved() {
  return createSelector(select, (state) => state);
}

export default {
  selectAllSaved,
};
