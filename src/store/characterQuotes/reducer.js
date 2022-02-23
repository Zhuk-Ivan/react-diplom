import { handleActions } from "redux-actions";
import {
  fetchCharacterQuotesRequest,
  fetchCharacterQuotesSuccess,
  fetchCharacterQuotesError
} from "./actions";

const initialState = {
  characterQuotes: {
    quotes: []
  },
  loading: false,
  error: null
};

export const characterQuotesReducer = handleActions(
  {
    [fetchCharacterQuotesRequest]: (state) => ({
      ...state,
      error: null,
      loading: true,
    }),
    [fetchCharacterQuotesSuccess]: (state, { payload: { quotes } }) => ({
      ...state,
      loading: false,
      characterQuotes : {
        quotes : quotes
      }
    }),
    [fetchCharacterQuotesError]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
      characterQuotes : {
        quotes : []
      },
    }),
  },
  initialState
);
