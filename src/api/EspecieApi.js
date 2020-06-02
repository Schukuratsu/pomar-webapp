import Axios from "./config";

class EspecieApi {
  static getAll() {
    return Axios({
      method: "GET",
      url: "/api/v1/especie",
    });
  }
  static find(id) {
    return Axios({
      method: "GET",
      url: `/api/v1/especie/${id}`,
    });
  }
  static save(data) {
    return Axios({
      method: "POST",
      url: "/api/v1/especie",
      data,
    });
  }
  static remove() {
    return Axios({
      method: "REMOVE",
      url: "/api/v1/especie/${id}",
    });
  }
}

export default EspecieApi;
