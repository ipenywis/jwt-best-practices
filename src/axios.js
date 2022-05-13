import Axios from "axios";

let axios = Axios.create();

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("api-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.log("Here!", error);
    if (error.response.status === 401) {
      localStorage.removeItem("api-token");
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  }
);

export default axios;
