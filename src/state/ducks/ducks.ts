import * as user from './user';
import * as team from './team';

export const operations = {
  user: user.UserOperations,
  team: team.TeamOperations,
};

export const selectors = {
  user: user.UserSelectors,
  team: team.TeamSelectors,
};
