import * as actions from "../actions/actionTypes";

const initialState = {
  pending: false,
  grupos: [],
  error: null,
};

export default function grupoReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_GRUPOS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case actions.FETCH_GRUPOS_SUCCESS:
      return {
        ...state,
        pending: false,
        grupos: action.payload,
      };
    case actions.FETCH_GRUPOS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case actions.SAVE_GRUPO_PENDING:
      return {
        ...state,
        pending: true,
      };
    case actions.SAVE_GRUPO_SUCCESS:
      return {
        ...state,
        pending: false,
        grupos: [...state.grupos, action.payload],
      };
    case actions.SAVE_GRUPO_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
