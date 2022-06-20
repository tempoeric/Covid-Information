import { call, put, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { actions } from './slice';

export function* getCovidSummaryConfirmedSaga(action) {
  try {
    const data = yield call(api.get, '/summary', action.payload);
    const highestCountryConfirmed = data.data.Countries.sort(
      (a: { TotalConfirmed: number }, b: { TotalConfirmed: number }) =>
        b.TotalConfirmed - a.TotalConfirmed,
    ).slice(0, 10);

    yield put(actions.getCovidDataConfirmedCompleted(highestCountryConfirmed));
  } catch (error) {
    yield put(actions.getCovidDataConfirmedFailed());
  }
}

export function* getCovidSummaryDeathSaga(action) {
  try {
    const data = yield call(api.get, '/summary', action.payload);
    const highestCountryDeaths = data.data.Countries.sort(
      (a: { TotalDeaths: number }, b: { TotalDeaths: number }) =>
        b.TotalDeaths - a.TotalDeaths,
    ).slice(0, 10);

    yield put(actions.getCovidDataDeathsCompleted(highestCountryDeaths));
  } catch (error) {
    yield put(actions.getCovidDataDeathsFailed());
  }
}

export function* getCovidSummaryRecoverySaga(action) {
  try {
    const data = yield call(api.get, '/summary', action.payload);
    const highestCountryRecovered = data.data.Countries.sort(
      (a: { TotalRecovered: number }, b: { TotalRecovered: number }) =>
        b.TotalRecovered - a.TotalRecovered,
    ).slice(0, 10);
    yield put(actions.getCovidDataRecoveredCompleted(highestCountryRecovered));
  } catch (error) {
    yield put(actions.getCovidDataRecoveredFailed());
  }
}

export function* covidInfoAppSaga() {
  yield takeLatest(
    actions.getCovidDataConfirmed.type,
    getCovidSummaryConfirmedSaga,
  );
  yield takeLatest(actions.getCovidDataDeaths.type, getCovidSummaryDeathSaga);
  yield takeLatest(
    actions.getCovidDataRecovered.type,
    getCovidSummaryRecoverySaga,
  );
}
