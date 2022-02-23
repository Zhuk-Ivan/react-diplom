import { handleActions } from "redux-actions";
import {
  fetchCharacterDetailsRequest,
  fetchCharacterDetailsSuccess,
  fetchCharacterDetailsError
} from "./actions";

const initialState = {
  characterDetails: {
    char_id: "",
    name: "",
    birthday: "",
    img: "",
    status: "",
    nickname: "",
    portrayed: "",
    appearance: []
    },
  loading: false,
  error: null
};

export const characterDetailsReducer = handleActions(
  {
    [fetchCharacterDetailsRequest]: (state) => ({
      ...state,
      error: null,
      loading: true,
    }),
    [fetchCharacterDetailsSuccess]: (state, { payload }) => ({
      ...state,
      loading: false,
      characterDetails: payload
    }),
    [fetchCharacterDetailsError]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
      characterDetails: {},
    }),
  },
  initialState
);
