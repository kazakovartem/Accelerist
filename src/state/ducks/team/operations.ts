import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import api from '../../../api';
import { store } from '../../store';
import { DefaultRejectValue } from './types';

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

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
  owner: {
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

// eslint-disable-next-line @typescript-eslint/ban-types
type GetTeamPayload = {};

export const getTeam = createAsyncThunk<
  TeamResponse,
  GetTeamPayload,
  {
    extra: { api: typeof api };
    rejectValue: DefaultRejectValue;
  }
// eslint-disable-next-line no-empty-pattern
>('team/get', async ({}, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.team.getTeam();
    return response.data;
  } catch (error: any) {
    const err: AxiosError<ValidationErrors> = error;
    if (!err.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});

export default {
  getTeam,
};
