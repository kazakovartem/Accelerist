import * as user from './user';
import * as team from './team';
import * as lastLogin from './lastLogin';
import * as saved from './saved';
import * as company from './company';

export const operations = {
  user: user.UserOperations,
  team: team.TeamOperations,
  lastLogin: lastLogin.LastLoginOperations,
  saved: saved.SavedOperations,
  company: company.CompaniesOperations,
};

export const selectors = {
  user: user.UserSelectors,
  team: team.TeamSelectors,
  lastLogin: lastLogin.LastLoginSelectors,
  saved: saved.SavedSelectors,
  company: company.CompaniesSelectors,
};
