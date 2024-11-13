import { apiSlice } from "../api/apiSlice";
import { API_URL } from "@/commons/constants";

export const categoryApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (data) => ({
        url: `${API_URL}/categories`,
        method: "POST",
        body: data,
      }),
    }),
    getShowCategory: builder.query({
      query: () => `${API_URL}/categories`,
    }),
    getProductTypeCategory: builder.query({
      query: (type) => `${API_URL}/categories/product-by-category/${type}`,
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useGetShowCategoryQuery,
  useGetProductTypeCategoryQuery,
} = categoryApi;
