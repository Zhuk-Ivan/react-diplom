import { call, put, takeLatest} from "redux-saga/effects";
import { transformCharacter } from "../../utils";
import {
  fetchCharacterDetailsRequest,
  fetchCharacterDetails,
  fetchCharacterDetailsSuccess,
  fetchCharacterDetailsError,
} from "./actions";

import { fetchCharacterDetailsInfo, fetchCharacterDetailsInfoByName } from "../../api/characters";

export function* characterDetailsSaga() {
  yield takeLatest(fetchCharacterDetails, handler);
}

function* handler(action) {
  yield put(fetchCharacterDetailsRequest());

  try {
    const characterDetails = yield call(fetchCharacterDetailsInfo, action.payload.id);
    const details = transformCharacter(characterDetails[0]);
    yield put(fetchCharacterDetailsSuccess( details ));
  } catch (error) {
    yield put(fetchCharacterDetailsError(error));
  }
}