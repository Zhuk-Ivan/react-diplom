import { handleActions } from "redux-actions";
import {
  fetchCharacterDeathRequest,
  fetchCharacterDeathSuccess,
  fetchCharacterDeathError
} from "./actions";

const initialState = {
  characterDeath: {
    cause: "",
    responsible: "",
    birthday: "",
    last_words: "",
    season: "",
    episode: ""
    },
  loading: false,
  error: null
};

export const characterDeathReducer = handleActions(
  {
    [fetchCharacterDeathRequest]: (state) => ({
      ...state,
      error: null,
      loading: true,
    }),
    [fetchCharacterDeathSuccess]: (state, { payload }) => ({
      ...state,
      loading: false,
      characterDeath: payload
    }),
    [fetchCharacterDeathError]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
      characterDeath: {},
    }),
  },
  initialState
);
