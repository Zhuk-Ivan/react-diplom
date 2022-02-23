import { createActions } from "redux-actions";
import { identity } from "../../utils";

export const {
  fetchCharacters,
  fetchCharactersRequest,
  fetchCharactersSuccess,
  fetchCharactersError
} = createActions({
  FETCH_CHARACTERS: identity,
  FETCH_CHARACTERS_REQUEST: identity,
  FETCH_CHARACTERS_SUCCESS: identity,
  FETCH_CHARACTERS_ERROR: identity
});
