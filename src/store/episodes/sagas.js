import { call, put, takeLatest } from "redux-saga/effects";

import {
  fetchEpisodes,
  fetchEpisodesRequest,
  fetchEpisodesSuccess,
  fetchEpisodesError,
} from "./actions";
import { fetchEpisodesArray } from "../../api/episodes";

export function* episodesSaga() {
  yield takeLatest(fetchEpisodes, handler);
}

function* handler() {
  yield put(fetchEpisodesRequest());

  try {
    const episodes = yield call(fetchEpisodesArray);

    yield put(fetchEpisodesSuccess({ episodes }));
  } catch (error) {
    yield put(fetchEpisodesError(error));
  }
}
