import { createSelector } from "reselect";
import { CHARACTER_DEATH } from "./constants";

export const selectCharacterDeathState = (state) => state[CHARACTER_DEATH];

export const selectCharacterDeath= createSelector(
    selectCharacterDeathState,
  ({ characterDeath }) => characterDeath
);

export const selectCharacterDeathLoading = createSelector(
    selectCharacterDeathState,
  ({ loading }) => loading
);

export const selectCharacterDeathError = createSelector(
    selectCharacterDeathState,
  ({ error }) => error
);
