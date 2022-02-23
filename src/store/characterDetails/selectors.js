
import { createSelector } from "reselect";
import { CHARACTER_DETAILS } from "./constants";

export const selectCharacterDetailsState = (state) => state[CHARACTER_DETAILS];

export const selectCharacterDetails = createSelector(
    selectCharacterDetailsState,
  ({ characterDetails }) => characterDetails
);

export const selectCharacterDetailsLoading = createSelector(
    selectCharacterDetailsState,
  ({ loading }) => loading
);

export const selectCharacterDetailsError = createSelector(
    selectCharacterDetailsState,
  ({ error }) => error
);

