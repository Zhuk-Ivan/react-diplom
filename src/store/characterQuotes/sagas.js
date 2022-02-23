import { call, put, takeLatest } from "redux-saga/effects";

import {
  fetchCharacterQuotes,
  fetchCharacterQuotesRequest,
  fetchCharacterQuotesSuccess,
  fetchCharacterQuotesError,
} from "./actions";
import { fetchCharacterQuotesArray } from "../../api/quotes";

export function* characterQuotesSaga() {
  yield takeLatest(fetchCharacterQuotes, handler);
}

function* handler(action) {
  yield put(fetchCharacterQuotesRequest());

  try {
    const quotes = yield call(fetchCharacterQuotesArray, action.payload);

    yield put(fetchCharacterQuotesSuccess({ quotes }));
  } catch (error) {
    yield put(fetchCharacterQuotesError(error));
  }
}