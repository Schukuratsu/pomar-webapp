import Axios from "./config";

class ColheitaApi {
  static getAll() {
    return Axios({
      method: "GET",
      url: "/api/v1/colheita",
    });
  }
  static find(id) {
    return Axios({
      method: "GET",
      url: `/api/v1/colheita/${id}`,
    });
  }
  static save(payload) {
    return Axios({
      method: "POST",
      url: "/api/v1/colheita",
      payload,
    });
  }
  static remove() {
    return Axios({
      method: "REMOVE",
      url: "/api/v1/colheita/${id}",
    });
  }
}

export default ColheitaApi;
