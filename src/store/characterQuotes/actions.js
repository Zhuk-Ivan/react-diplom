import { createActions } from "redux-actions";
import { identity } from "../../utils";

export const {
  fetchCharacterQuotes,
  fetchCharacterQuotesRequest,
  fetchCharacterQuotesSuccess,
  fetchCharacterQuotesError,
  resetCharacterQuotes
} = createActions({
  FETCH_CHARACTER_QUOTES: identity,
  FETCH_CHARACTER_QUOTES_REQUEST: identity,
  FETCH_CHARACTER_QUOTES_SUCCESS: identity,
  FETCH_CHARACTER_QUOTES_ERROR: identity,
  RESET_CHARACTER_QUOTES : identity
});
