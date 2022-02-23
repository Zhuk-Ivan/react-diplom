import { handleActions } from "redux-actions";
import {
  fetchCharactersRequest,
  fetchCharactersSuccess,
  fetchCharactersError
} from "./actions";

const initialState = {
  characters: [],
  loading: false,
  error: null
};

export const characterReducer = handleActions(
  {
    [fetchCharactersRequest]: (state) => ({
      ...state,
      error: null,
      loading: true,
    }),
    [fetchCharactersSuccess]: (state, { payload: { characters } }) => ({
      ...state,
      loading: false,
      characters
    }),
    [fetchCharactersError]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
      characters: [],
    }),
  },
  initialState
);
