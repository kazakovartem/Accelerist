import { createSlice } from '@reduxjs/toolkit';
import * as operations from './operations';
import { OneCompany } from './types';

type CompaniesState = {
  items: [
    {
      id: string;
      zoomInfoId: null,
      name: string;
      logo: null | string;
      ticker: string;
      parentCompany: null | string;
      phone: null | string;
      fax: null | string;
      website: null | string;
      city: null | string;
      street: null | string;
      state: null | string;
      zipCode: null | string;
      country: null | string;
      continent: null | string;
      productsBrandDescription: null | string;
      descriptionList: null | string;
      revenueRange: null | string;
      employeeRange: null | string;
      twitterHandle: null | string;
      socialMediaUrls: null | string;
      competitors: null | string;
      subUnitIndustries: null | string;
      primaryIndustry: string[] | null,
      industries: null | string;
      revenue: null | string;
      employeeCount: number;
      annualContributions: null | string;
      cashContributions: null | string;
      inKindContributions: null | string;
      employeeContributions: null | string;
      parentId: null | string;
      parentName: null | string;
      type: null | string;
      sdgGoals: [],
      genders: null | string;
      income: null | string;
      age: null | string;
      ethnicity: null | string;
      nonprofit: null | string;
      purchase: null | string;
      affiliation: null | string;
      brands: null | string;
      interests: null | string;
      typesOfInvestment: null | string;
      errorLoadZoomInfo: null | string;
      charitablePartners: [],
      statusZoomInfo: null | string;
      loadZoomInfoDate: null | string;
      errorLoadZoomInfoDate: null | string | undefined | any;
      partnershipLink: null | string;
      employeeEngagementOpportunities: boolean;
      similarCompanies: string[] | null,
      favoriteCompanies: [
        {
          id?: string;
          companyId?: string;
          userId?: string;
        }
      ],
      score: number;
      like: boolean;
      crsFocus: any;
    }
  ],
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: string;
    totalPages: number;
    currentPage: string;
  }
};

const Company = createSlice({
  name: 'company',
  initialState: <CompaniesState>{ items: [{}], meta: {} },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(operations.getFavoriteCompanies.pending, (state) => {
        // Login started
        // state.status = 'Loading';
      }).addCase(operations.getFavoriteCompanies.fulfilled, (state, action) => {
        // succeeded
        state.items.splice(0, state.items.length);
        // eslint-disable-next-line array-callback-return
        action.payload.items.map((savedItem: OneCompany) => {
          state.items.push(savedItem);
        });
        state.meta.currentPage = action.payload.meta.currentPage;
        state.meta.totalItems = action.payload.meta.totalItems;
        state.meta.itemCount = action.payload.meta.itemCount;
        state.meta.itemsPerPage = action.payload.meta.itemsPerPage;
        state.meta.totalPages = action.payload.meta.totalPages;
      });
  },
});

export default Company.reducer;
