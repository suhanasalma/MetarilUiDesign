import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://parallaxlogic.dev/swap-backend/api/v1",
  }),
  endpoints: (builder) => ({
    getProductsCategory: builder.query({
      query: () => "homepage?filter_type=1&type=buy",
    }),
    getProductsByCategory: builder.query({
      query: (id) => `buy-list?filter_type=1&category_id[]=${id}`,
    }),
    getProductsDetails: builder.query({
      query: (seo) => `product/detail/${seo}`,
    }),
  }),
});


export const {useGetProductsCategoryQuery,useGetProductsByCategoryQuery,useGetProductsDetailsQuery} = productsApi