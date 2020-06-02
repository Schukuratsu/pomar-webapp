import Axios from "./config";

class GrupoApi {
  static getAll() {
    return Axios({
      method: "GET",
      url: "/api/v1/grupo",
    });
  }
  static find(id) {
    return Axios({
      method: "GET",
      url: `/api/v1/grupo/${id}`,
    });
  }
  static save(payload) {
    return Axios({
      method: "POST",
      url: "/api/v1/grupo",
      payload,
    });
  }
  static remove() {
    return Axios({
      method: "REMOVE",
      url: "/api/v1/grupo/${id}",
    });
  }
}

export default GrupoApi;
