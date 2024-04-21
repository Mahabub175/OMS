import { jwtDecode } from "jwt-decode";
import { baseApi } from "../../api/baseApi";

const bookApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addBook: build.mutation({
      query: (bookInfo) => {
        return {
          url: "/books/",
          method: "POST",
          body: bookInfo,
        };
      },
      invalidatesTags: ["books"],
    }),
    getBooks: build.query({
      query: () => ({
        url: "/books/",
        method: "GET",
      }),
      transformResponse: (response) => {
        const bookData = jwtDecode(response.data.results.token);
        return bookData;
      },
      providesTags: ["books"],
    }),
    getSingleBook: build.query({
      query: (id) => ({
        url: `/books/${id}/`,
        method: "GET",
      }),
      transformResponse: (response) => {
        const bookData = jwtDecode(response.data.results.token);
        return bookData;
      },
      providesTags: ["books"],
    }),
    deleteBook: build.mutation({
      query: (id) => ({
        url: `/books/${id}/soft_delete/`,
        method: "POST",
        body: {},
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useAddBookMutation,
  useGetBooksQuery,
  useDeleteBookMutation,
  useGetSingleBookQuery,
} = bookApi;
