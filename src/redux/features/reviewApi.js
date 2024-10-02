import { apiSlice } from "../api/apiSlice";
import { API_URL } from "@/commons/constants";

export const reviewApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (data) => ({
        url: `${API_URL}/reviews`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Products",
        { type: "Product", id: arg.productId },
      ],
    }),
  }),
});

export const { useAddReviewMutation } = reviewApi;
