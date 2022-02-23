import { call, put, takeLatest} from "redux-saga/effects";
import {
  fetchCharacterDeath,
  fetchCharacterDeathRequest,
  fetchCharacterDeathSuccess,
  fetchCharacterDeathError,
} from "./actions";

import { fetchCharacterDeathInfo } from "../../api/deaths";

export function* characterDeathSaga() {
  yield takeLatest(fetchCharacterDeath, handler);
}

function* handler(action) {
  yield put(fetchCharacterDeathRequest());
  try {
    const characterDeath = yield call(fetchCharacterDeathInfo, action.payload);
    const death = characterDeath[0];
    yield put(fetchCharacterDeathSuccess( death ));
  } catch (error) {
    yield put(fetchCharacterDeathError(error));
  }
}