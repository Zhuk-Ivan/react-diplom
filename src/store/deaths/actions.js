import { createActions } from "redux-actions";
import { identity } from "../../utils";

export const {
  fetchCharacterDeath,
  fetchCharacterDeathRequest,
  fetchCharacterDeathSuccess,
  fetchCharacterDeathError
} = createActions({
  FETCH_CHARACTER_DEATH: identity,
  FETCH_CHARACTER_DEATH_REQUEST: identity,
  FETCH_CHARACTER_DEATH_SUCCESS: identity,
  FETCH_CHARACTER_DEATH_ERROR: identity
});
