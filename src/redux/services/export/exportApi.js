import { baseApi } from "../../api/baseApi";

const exportApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    exportFile: build.query({
      query: () => ({
        url: `/export/?file_type=excel&model=Book&app_label=books`,
        method: "GET",
      }),
    }),
  }),
});

export const { useExportFileQuery } = exportApi;

export default exportApi;
