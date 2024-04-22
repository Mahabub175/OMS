import { jwtDecode } from "jwt-decode";
import { baseApi } from "../../api/baseApi";

const phoneApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addPhone: build.mutation({
      query: (data) => {
        return {
          url: "/phones/",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["phones"],
    }),
    getPhones: build.query({
      query: ({ page }) => ({
        url: `/phones/?limit=10&offset=${(page - 1) * 10}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        const resData = jwtDecode(response.data.results.token);
        return { response: response.data.meta, data: resData.data };
      },
      providesTags: ["phones"],
    }),
    getAllPhones: build.query({
      query: () => ({
        url: `/phones/`,
        method: "GET",
      }),
      transformResponse: (response) => {
        const resData = jwtDecode(response.data.results.token);
        return { data: resData.data };
      },
      providesTags: ["phones"],
    }),
    getSinglePhone: build.query({
      query: (id) => ({
        url: `/phones/${id}/`,
        method: "GET",
      }),
      transformResponse: (response) => {
        const resData = jwtDecode(response.data.results.token);
        return resData;
      },
      providesTags: ["phones"],
    }),
    updatePhone: build.mutation({
      query: (payload) => ({
        url: `/phones/${payload.id}/`,
        method: "PATCH",
        body: payload.data,
      }),
      invalidatesTags: ["phones"],
    }),
    deletePhone: build.mutation({
      query: (id) => ({
        url: `/phones/${id}/soft_delete/`,
        method: "POST",
        body: {},
      }),
      invalidatesTags: ["phones"],
    }),
  }),
});

export const {
  useAddPhoneMutation,
  useGetPhonesQuery,
  useGetAllPhonesQuery,
  useGetSinglePhoneQuery,
  useUpdatePhoneMutation,
  useDeletePhoneMutation,
} = phoneApi;
