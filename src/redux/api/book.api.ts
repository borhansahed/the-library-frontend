import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/book",
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: `/book`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetBooksQuery, usePostBookMutation } = bookApi;
