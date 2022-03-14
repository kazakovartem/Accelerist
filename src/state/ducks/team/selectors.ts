import { createSelector } from 'reselect';
import { TeamState } from './types';

const select = (state: TeamState) => state.team;

function selectTeam() {
  return createSelector(select, (state) => state);
}

export default {
  selectTeam,
};
