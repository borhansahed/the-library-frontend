import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const bookApi = createApi({
  reducerPath: "bookApi",
  tagTypes: ["reviews", "books", "updateBook"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/book",
  }),
  endpoints: (builder) => ({
    getLatestBook: builder.query({
      query: () => "/latestBook",
      providesTags: ["books"],
    }),
    getBooks: builder.query({
      query: () => "/allBook",
      providesTags: ["books"],
    }),
    getOneBook: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["updateBook"],
    }),
    getReview: builder.query({
      query: (id) => `/review/${id}`,
      providesTags: ["reviews"],
    }),
    postReview: builder.mutation({
      query: ({ review, id }) => ({
        url: `/review/${id}`,
        method: "POST",
        body: { review },
      }),
      invalidatesTags: ["reviews"],
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: `/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["updateBook"],
    }),
  }),
});

export const {
  useGetLatestBookQuery,
  useGetBooksQuery,
  usePostBookMutation,
  useGetOneBookQuery,
  useDeleteBookMutation,
  usePostReviewMutation,
  useGetReviewQuery,
  useUpdateBookMutation,
} = bookApi;
