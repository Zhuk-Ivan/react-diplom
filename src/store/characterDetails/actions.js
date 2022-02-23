import { createActions } from "redux-actions";
import { identity} from "../../utils";

export const {
  fetchCharacterDetails,
  fetchCharacterDetailsRequest,
  fetchCharacterDetailsSuccess,
  fetchCharacterDetailsError
} = createActions({
  FETCH_CHARACTER_DETAILS: identity,
  FETCH_CHARACTER_DETAILS_REQUEST: identity,
  FETCH_CHARACTER_DETAILS_SUCCESS: identity,
  FETCH_CHARACTER_DETAILS_ERROR: identity
});
