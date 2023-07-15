import { api } from '../api/apiSlice';

const productApi = api.injectEndpoints({
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
      //provide new tag/refetch here
      providesTags: ['comments'],
    }),
    postComment: builder.mutation({
      //query recieves one parameter only
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      //when to trigger refetch
      invalidatesTags: ['comments'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = productApi;
