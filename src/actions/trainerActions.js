import * as actions from "./actionTypes";

export function saveName(name) {
  return { type: actions.SAVE_NAME, payload: name };
}
export function saveFavoritePokemonType(favoriteType) {
  return { type: actions.SAVE_FAVORITE_TYPE, payload: favoriteType };
}
