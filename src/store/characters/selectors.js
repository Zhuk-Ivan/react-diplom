
import { createSelector } from "reselect";
import { CHARACTERS } from "./constants";

export const selectCharactersState = (state) => state[CHARACTERS];

export const selectCharacters = createSelector(
  selectCharactersState,
  ({ characters }) => characters
);

export const selectCharactersLoading = createSelector(
  selectCharactersState,
  ({ loading }) => loading
);

export const selectCharactersError = createSelector(
  selectCharactersState,
  ({ error }) => error
);

