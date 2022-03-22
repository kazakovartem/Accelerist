import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import api from '../../../api';
import { DefaultRejectValue } from './types';

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

type CompaniesResponse = {
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
  };
};

// eslint-disable-next-line @typescript-eslint/ban-types
type GetCompanyPayload = {
  page: number;
  limit: number;
};

type GetFavoriteCompanyProps = {
  page: number;
  limit: number;
};

export const getFavoriteCompanies = createAsyncThunk<
  CompaniesResponse,
  GetCompanyPayload,
  {
    extra: { api: typeof api };
    rejectValue: DefaultRejectValue;
  }
// eslint-disable-next-line no-empty-pattern
>('companies/favorite/get', async ({ page, limit }:GetFavoriteCompanyProps, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.company.getFavoritesCompany(page, limit);
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
  getFavoriteCompanies,
};
