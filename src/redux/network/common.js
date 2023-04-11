import { fetchData } from "./api";

export const getCountries = async () =>
  await fetchData({
    endpoint: `/v1/Country`,
    params: { pageIndex: 1, pageSize: 300 },
    disableSwal: true,
    disableLoader: true,
  });
