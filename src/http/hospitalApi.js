import { $authHost, $host } from "./index";

export const getAllHospital = async (country, hospitalType) => {
  const { data } = await $host.get("hospital/", {
    params: {
      country,
      hospitalType,
    },
  });
  return data;
};
export const getAllCountries = async () => {
  const { data } = await $host.get("country/");
  return data;
};
export const getAllTypes = async () => {
  const { data } = await $host.get("hospitaltype/");
  return data;
};
export const getAllDepartment = async () => {
  const { data } = await $host.get("department/");
  return data;
};
