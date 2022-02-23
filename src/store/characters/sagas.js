import { call, put, takeLatest } from "redux-saga/effects";

import {
  fetchCharactersRequest,
  fetchCharacters,
  fetchCharactersSuccess,
  fetchCharactersError,
} from "./actions";
import { fetchAllCharacters } from "../../api/characters";

export function* charactersSaga() {
  yield takeLatest(fetchCharacters, handler);
}

function* handler() {
  yield put(fetchCharactersRequest());

  try {
    const characters = yield call(fetchAllCharacters);

    yield put(fetchCharactersSuccess({ characters }));
  } catch (error) {
    yield put(fetchCharactersError(error));
  }
}