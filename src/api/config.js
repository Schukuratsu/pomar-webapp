import Axios from "axios";

const config = {
  backendUrl: "http://127.0.0.1:3000",
  token: null,
};

export default (options) =>
  Axios({
    ...options,
    headers: {
      ...Axios.defaults.headers.common,
      ...options.headers,
    },
    baseURL: config.backendUrl,
  });
