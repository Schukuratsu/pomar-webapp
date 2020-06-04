import * as actions from "../actions/actionTypes";

const initialState = {
  pending: false,
  arvores: [],
  error: null,
};

export default function arvoreReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_ARVORES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case actions.FETCH_ARVORES_SUCCESS:
      return {
        ...state,
        pending: false,
        arvores: action.payload,
      };
    case actions.FETCH_ARVORES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case actions.SAVE_ARVORE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case actions.SAVE_ARVORE_SUCCESS:
      return {
        ...state,
        pending: false,
        arvores: [...state.arvores, action.payload],
      };
    case actions.SAVE_ARVORE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
