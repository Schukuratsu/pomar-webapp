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
  static save(data) {
    return Axios({
      method: "POST",
      url: "/api/v1/grupo",
      data,
    });
  }
  static remove(id) {
    return Axios({
      method: "REMOVE",
      url: `/api/v1/grupo/${id}`,
    });
  }
}

export default GrupoApi;
