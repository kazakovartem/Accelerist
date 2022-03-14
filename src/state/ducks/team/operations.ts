import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api';
import { store } from '../../store';

interface IAddUserInState {
  email: string;
  password: string;
}

type DefaultRejectValue = string;
type AppDispatch = typeof store.dispatch;
type State = {
  user: {
    email: string;
    password: string;
    token: string;
    status: null | string;
    error: null | string;
  };
};
export type ExtraParamsThunkType<T = DefaultRejectValue> = {
  extra: { api: typeof api };
  rejectValue: T;
  dispatch: AppDispatch;
  state: State;
};

type TeamResponse = {
    id: string;
    ownerId: string;
    catalistId: null | string;
    organizationName: null | string;
    logoKey: null | string;
    numberConstituents: null | string;
    email: null | string;
    annualTotalContributions: null | string;
    aieldActivity: null | string;
    twitterLink: null | string;
    twitterHandle: null | string;
    linkedinLink: null | string;
    contactName: null | string;
    contactPhone: null | string;
    contactWebsite: null | string;
    goalAlignment: any[];
    typesOfInvestment: null | string;
    address: null | string;
    state: null | string;
    city: null | string;
    zip: null | string;
    affinities: null | string;
    primaryMissionFocus: null | string;
    secondaryMissionFocus: null | string;
    employeeEngagementOpportunities: true;
    opportunities: null | string;
    impactStatements: null | string;
    income: null | string;
    age: null | string | number;
    brands: null | string;
    ethnicity: null | string;
    genders: null | string;
    purchase: null | string;
    nonprofit: null | string;
    interests: null | string;
    affiliation: null | string;
    searchCount: null | number;
    pitchCount: null | number;
    status: null | string;
    error: null | string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isAuthorized: boolean;
    role: string;
    teamId: string;
    loggedInAt: string;
    createdAt: string;
    updatedAt: string;
    avatarKey: string | null;
  };
};

type SignInPayload = {
  email: string;
  password: string;
};

export const signInUser = createAsyncThunk<
  TeamResponse,
  SignInPayload,
  ExtraParamsThunkType<DefaultRejectValue>
>('team/get', async ({ email, password }: IAddUserInState, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.team.getTeam();
    console.log(response);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export default {
  signInUser,
};
