import { createSlice } from '@reduxjs/toolkit';
import * as operations from './operations';

type TeamState = {
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
  employeeEngagementOpportunities: boolean;
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
};

const Team = createSlice({
  name: 'team',
  initialState: <TeamState>{
    id: '',
    ownerId: '',
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(operations.getTeam.pending, (state) => {
        // Login started
        state.status = 'Loading';
      })
      .addCase(operations.getTeam.fulfilled, (state, action) => {
        // succeeded signInUser
        state.status = 'Resolved';
        state.id = action.payload.id;
        state.ownerId = action.payload.ownerId;
        state.catalistId = action.payload.catalistId;
        state.organizationName = action.payload.organizationName;
        state.logoKey = action.payload.logoKey;
        state.numberConstituents = action.payload.numberConstituents;
        state.email = action.payload.email;
        state.annualTotalContributions = action.payload.annualTotalContributions;
        state.aieldActivity = action.payload.aieldActivity;
        state.twitterLink = action.payload.twitterLink;
        state.twitterHandle = action.payload.twitterHandle;
        state.linkedinLink = action.payload.linkedinLink;
        state.contactName = action.payload.contactName;
        state.contactPhone = action.payload.contactPhone;
        state.contactWebsite = action.payload.contactWebsite;
        state.goalAlignment = action.payload.goalAlignment;
        state.typesOfInvestment = action.payload.typesOfInvestment;
        state.address = action.payload.address;
        state.state = action.payload.state;
        state.city = action.payload.city;
        state.zip = action.payload.zip;
        state.affinities = action.payload.affinities;
        state.primaryMissionFocus = action.payload.primaryMissionFocus;
        state.secondaryMissionFocus = action.payload.secondaryMissionFocus;
        state.employeeEngagementOpportunities = action.payload.employeeEngagementOpportunities;
        state.opportunities = action.payload.opportunities;
        state.impactStatements = action.payload.impactStatements;
        state.income = action.payload.income;
        state.age = action.payload.age;
        state.brands = action.payload.brands;
        state.ethnicity = action.payload.ethnicity;
        state.genders = action.payload.genders;
        state.purchase = action.payload.purchase;
        state.nonprofit = action.payload.nonprofit;
        state.interests = action.payload.interests;
        state.affiliation = action.payload.affiliation;
        state.searchCount = action.payload.searchCount;
        state.pitchCount = action.payload.pitchCount;
      })
      .addCase(operations.getTeam.rejected, (state) => {
        // failed signInUser
        state.status = 'Error';
      });
  },
});

export default Team.reducer;
