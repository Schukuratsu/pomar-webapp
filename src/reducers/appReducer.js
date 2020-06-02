import * as actions from "../actions/actionTypes";

const defaultState = {
  fromHome: false,
  pokemons: [],
  pokemonTypes: [],
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SAVE_FROM_HOME:
      return {
        ...state,
        fromHome: true,
      };
    case actions.SAVE_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case actions.SAVE_POKEMON_TYPES:
      return {
        ...state,
        pokemonTypes: action.payload,
      };
    default:
      return state;
  }
};

export default app;
