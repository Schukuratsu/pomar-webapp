import * as actions from "../actions/actionTypes";

const initialState = {
  pending: false,
  colheitas: [],
  error: null,
};

export default function colheitaReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_COLHEITAS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case actions.FETCH_COLHEITAS_SUCCESS:
      return {
        ...state,
        pending: false,
        colheitas: action.payload,
      };
    case actions.FETCH_COLHEITAS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case actions.SAVE_COLHEITA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case actions.SAVE_COLHEITA_SUCCESS:
      return {
        ...state,
        pending: false,
        colheitas: [...state.colheitas, action.payload],
      };
    case actions.SAVE_COLHEITA_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
