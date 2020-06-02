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
  static save(payload) {
    return Axios({
      method: "POST",
      url: "/api/v1/arvore",
      payload,
    });
  }
  static remove() {
    return Axios({
      method: "REMOVE",
      url: "/api/v1/arvore/${id}",
    });
  }
}

export default ArvoreApi;
