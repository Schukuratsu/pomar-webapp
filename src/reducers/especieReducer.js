import * as actions from "../actions/actionTypes";

const initialState = {
  pending: false,
  especies: [],
  error: null,
};

export default function especieReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_ESPECIES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case actions.FETCH_ESPECIES_SUCCESS:
      return {
        ...state,
        pending: false,
        especies: action.payload,
      };
    case actions.FETCH_ESPECIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case actions.SAVE_ESPECIE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case actions.SAVE_ESPECIE_SUCCESS:
      return {
        ...state,
        pending: false,
        especies: [...state.especies, action.payload],
      };
    case actions.SAVE_ESPECIE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
