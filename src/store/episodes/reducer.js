import { handleActions } from "redux-actions";
import {
  fetchEpisodesRequest,
  fetchEpisodesSuccess,
  fetchEpisodesError
} from "./actions";

const initialState = {
    episodes: [],
  loading: false,
  error: null
};

export const episodesReducer = handleActions(
  {
    [fetchEpisodesRequest]: (state) => ({
      ...state,
      error: null,
      loading: true,
    }),
    [fetchEpisodesSuccess]: (state, { payload: { episodes } }) => ({
      ...state,
      loading: false,
      episodes
    }),
    [fetchEpisodesError]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
      episodes: [],
    }),
  },
  initialState
);