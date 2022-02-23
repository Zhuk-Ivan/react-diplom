
import { createSelector } from "reselect";
import { CHARACTER_QUOTES } from "./constants";

export const selectCharacterQuotesState = (state) => state[CHARACTER_QUOTES];

export const selectCharacterQuotes = createSelector(
    selectCharacterQuotesState,
  ({ characterQuotes }) => characterQuotes
);

export const selectCharacterQuotesLoading = createSelector(
    selectCharacterQuotesState,
  ({ loading }) => loading
);

export const selectCharacterQuotesError = createSelector(
    selectCharacterQuotesState,
  ({ error }) => error
);