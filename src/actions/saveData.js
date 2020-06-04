import * as dataActions from "./dataActions";
import EspecieApi from "../api/EspecieApi";
import ArvoreApi from "../api/ArvoreApi";
import GrupoApi from "../api/GrupoApi";
import ColheitaApi from "../api/ColheitaApi";
import { toastr } from "react-redux-toastr";

export function saveEspecie(data) {
  return (dispatch) => {
    dispatch(dataActions.saveEspeciePending());
    return EspecieApi.save(data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log(res.data);
        dispatch(dataActions.saveEspecieSuccess(res.data));
        return true;
      })
      .catch((error) => {
        dispatch(dataActions.saveEspecieError(error));
        toastr.error("Error when trying to save");
        return false;
      });
  };
}

export function saveArvore(data) {
  return (dispatch) => {
    dispatch(dataActions.saveArvorePending());
    return ArvoreApi.save(data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(dataActions.saveArvoreSuccess(res.data));
        return true;
      })
      .catch((error) => {
        dispatch(dataActions.saveArvoreError(error));
        toastr.error("Error when trying to save");
        return false;
      });
  };
}

export function saveGrupo(data) {
  return (dispatch) => {
    dispatch(dataActions.saveGrupoPending());
    return GrupoApi.save(data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(dataActions.saveGrupoSuccess(res.data));
        return true;
      })
      .catch((error) => {
        dispatch(dataActions.saveGrupoError(error));
        toastr.error("Error when trying to save");
        return false;
      });
  };
}

export function saveColheita(data) {
  data.isGroup = data.isGroup === "grupo";
  data.ref = data.isGroup ? data.refGrupo : data.refArvore;
  return (dispatch) => {
    dispatch(dataActions.saveColheitaPending());
    return ColheitaApi.save(data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(dataActions.saveColheitaSuccess(res.data));
        return true;
      })
      .catch((error) => {
        dispatch(dataActions.saveColheitaError(error));
        toastr.error("Error when trying to save");
        return false;
      });
  };
}
