import { createActions } from "redux-actions";
import { identity } from "../../utils";

export const {
  fetchEpisodes,
  fetchEpisodesRequest,
  fetchEpisodesSuccess,
  fetchEpisodesError
} = createActions({
  FETCH_EPISODES: identity,
  FETCH_EPISODES_REQUEST: identity,
  FETCH_EPISODES_SUCCESS: identity,
  FETCH_EPISODES_ERROR: identity
});
