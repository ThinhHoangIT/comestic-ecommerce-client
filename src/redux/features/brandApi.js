import { apiSlice } from "../api/apiSlice";
import { API_URL } from "@/commons/constants";

export const brandApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getActiveBrands: builder.query({
      query: () => `${API_URL}/brands/`,
    }),
  }),
});

export const { useGetActiveBrandsQuery } = brandApi;
