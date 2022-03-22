export type TeamState = {
  team: {
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
  };
};

export type DefaultRejectValue = {
  error: { message: string };
  meta: {
    aborted: boolean;
    arg: {
      id?: string;
    };
    condition: boolean;
    rejectedWithValue: boolean;
    requestId: string;
    requestStatus: string;
  };
  payload: string;
  type: string;
};
