import Axios from "./config";

class ArvoreApi {
  static getAll() {
    return Axios({
      method: "GET",
      url: "/api/v1/arvore",
    });
  }
  static find(id) {
    return Axios({
      method: "GET",
      url: `/api/v1/arvore/${id}`,
    });
  }
  static save(data) {
    return Axios({
      method: "POST",
      url: "/api/v1/arvore",
      data,
    });
  }
  static remove(id) {
    return Axios({
      method: "REMOVE",
      url: `/api/v1/colheita/${id}`,
    });
  }
}

export default ArvoreApi;
