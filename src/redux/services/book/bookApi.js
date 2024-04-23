import { jwtDecode } from "jwt-decode";
import { baseApi } from "../../api/baseApi";

const bookApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addBook: build.mutation({
      query: (data) => {
        return {
          url: "/books/",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["books"],
    }),
    getBooks: build.query({
      query: ({ page, search }) => {
        let searchParams = "";
        if (search) {
          Object.keys(search).forEach((key) => {
            if (search[key]) {
              searchParams += `&${key}=${search[key]}`;
            }
          });
        }
        return {
          url: `/books/?limit=10&offset=${(page - 1) * 10}${searchParams}`,
          method: "GET",
        };
      },
      transformResponse: (response) => {
        const resData = jwtDecode(response.data.results.token);
        return { meta: response.data.meta, data: resData.data };
      },
      providesTags: ["books"],
    }),
    getAllBooks: build.query({
      query: () => ({
        url: `/books/`,
        method: "GET",
      }),
      transformResponse: (response) => {
        const resData = jwtDecode(response.data.results.token);
        return { data: resData.data };
      },
      providesTags: ["books"],
    }),
    getSingleBook: build.query({
      query: (id) => ({
        url: `/books/${id}/`,
        method: "GET",
      }),
      transformResponse: (response) => {
        const resData = jwtDecode(response.data.results.token);
        return resData;
      },
      providesTags: ["books"],
    }),
    updateBook: build.mutation({
      query: (payload) => ({
        url: `/books/${payload.id}/`,
        method: "PATCH",
        body: payload.data,
      }),
      invalidatesTags: ["books"],
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
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
