import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    //get all products query
    getProducts: builder.query({
      query: () => '/products',
    }),
    //get single product query
    getSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
    }),
    postComment: builder.mutation({
      //query recieves one parameter only
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = api;
