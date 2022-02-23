
import { createSelector } from "reselect";
import { EPISODES } from "./constants";

export const selectEpisodesState = (state) => state[EPISODES];

export const selectEpisodes = createSelector(
    selectEpisodesState,
  ({ episodes }) => episodes
);

export const selectEpisodesLoading = createSelector(
    selectEpisodesState,
  ({ loading }) => loading
);

export const selectEpisodesError = createSelector(
    selectEpisodesState,
  ({ error }) => error
);

