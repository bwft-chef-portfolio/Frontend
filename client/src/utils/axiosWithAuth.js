import axios from "axios";

export const BASE_URL = "https://backendchefls.herokuapp.com/api";
// #client-side-auth
// implementation of recieving auth token for private routes/views
export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: BASE_URL,
  });
};

export const axiosNoAuth = () => {
  return axios.create({
    baseURL: BASE_URL,
  });
};
