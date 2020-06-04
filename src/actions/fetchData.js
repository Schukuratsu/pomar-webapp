import * as dataActions from "./dataActions";
import EspecieApi from "../api/EspecieApi";
import ArvoreApi from "../api/ArvoreApi";
import GrupoApi from "../api/GrupoApi";
import ColheitaApi from "../api/ColheitaApi";

export function fetchEspecies() {
  return (dispatch) => {
    dispatch(dataActions.fetchEspeciesPending());
    return EspecieApi.getAll()
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(dataActions.fetchEspeciesSuccess(res.data.data));
        return true;
      })
      .catch((error) => {
        dispatch(dataActions.fetchEspeciesError(error));
        return false;
      });
  };
}

export function fetchArvores() {
  return (dispatch) => {
    dispatch(dataActions.fetchArvoresPending());
    return ArvoreApi.getAll()
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(dataActions.fetchArvoresSuccess(res.data.data));
        return true;
      })
      .catch((error) => {
        dispatch(dataActions.fetchArvoresError(error));
        return false;
      });
  };
}

export function fetchGrupos() {
  return (dispatch) => {
    dispatch(dataActions.fetchGruposPending());
    return GrupoApi.getAll()
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(dataActions.fetchGruposSuccess(res.data.data));
        return true;
      })
      .catch((error) => {
        dispatch(dataActions.fetchGruposError(error));
        return false;
      });
  };
}

export function fetchColheitas() {
  return (dispatch) => {
    dispatch(dataActions.fetchColheitasPending());
    return ColheitaApi.getAll()
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(dataActions.fetchColheitasSuccess(res.data.data));
        return true;
      })
      .catch((error) => {
        dispatch(dataActions.fetchColheitasError(error));
        return false;
      });
  };
}
