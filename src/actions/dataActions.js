import * as actions from "./actionTypes";

export function fetchEspeciesPending() {
  return { type: actions.FETCH_ESPECIES_PENDING };
}
export function fetchEspeciesSuccess(data) {
  return { type: actions.FETCH_ESPECIES_SUCCESS, payload: data };
}
export function fetchEspeciesError(error) {
  return { type: actions.FETCH_ESPECIES_ERROR, payload: error };
}

export function fetchArvoresPending() {
  return { type: actions.FETCH_ARVORES_PENDING };
}
export function fetchArvoresSuccess(data) {
  return { type: actions.FETCH_ARVORES_SUCCESS, payload: data };
}
export function fetchArvoresError(error) {
  return { type: actions.FETCH_ARVORES_ERROR, payload: error };
}

export function fetchGruposPending() {
  return { type: actions.FETCH_GRUPOS_PENDING };
}
export function fetchGruposSuccess(data) {
  return { type: actions.FETCH_GRUPOS_SUCCESS, payload: data };
}
export function fetchGruposError(error) {
  return { type: actions.FETCH_GRUPOS_ERROR, payload: error };
}

export function fetchColheitasPending() {
  return { type: actions.FETCH_COLHEITAS_PENDING };
}
export function fetchColheitasSuccess(data) {
  return { type: actions.FETCH_COLHEITAS_SUCCESS, payload: data };
}
export function fetchColheitasError(error) {
  return { type: actions.FETCH_COLHEITAS_ERROR, payload: error };
}

export function saveEspeciePending() {
  return { type: actions.SAVE_ESPECIE_PENDING };
}
export function saveEspecieSuccess(data) {
  return { type: actions.SAVE_ESPECIE_SUCCESS, payload: data };
}
export function saveEspecieError(error) {
  return { type: actions.SAVE_ESPECIE_ERROR, payload: error };
}

export function saveArvorePending() {
  return { type: actions.SAVE_ARVORE_PENDING };
}
export function saveArvoreSuccess(data) {
  return { type: actions.SAVE_ARVORE_SUCCESS, payload: data };
}
export function saveArvoreError(error) {
  return { type: actions.SAVE_ARVORE_ERROR, payload: error };
}

export function saveGrupoPending() {
  return { type: actions.SAVE_GRUPO_PENDING };
}
export function saveGrupoSuccess(data) {
  return { type: actions.SAVE_GRUPO_SUCCESS, payload: data };
}
export function saveGrupoError(error) {
  return { type: actions.SAVE_GRUPO_ERROR, payload: error };
}

export function saveColheitaPending() {
  return { type: actions.SAVE_COLHEITA_PENDING };
}
export function saveColheitaSuccess(data) {
  return { type: actions.SAVE_COLHEITA_SUCCESS, payload: data };
}
export function saveColheitaError(error) {
  return { type: actions.SAVE_COLHEITA_ERROR, payload: error };
}
