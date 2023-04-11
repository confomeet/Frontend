import { put, takeLatest, call } from "redux-saga/effects";
import { getCountries } from "../../network/common";
import { getModifiedCountries } from "utils";
import actions from "../../actions";

const { GET_COUNTRIES, getCountriesDone } = actions;

function* performGetCountries() {
  try {
    const result = yield call(getCountries);
    if (!result.networkSuccess) yield put(getCountriesDone({ data: [] }));
    else if (result.data) {
      const data = getModifiedCountries(
        result.data?.items,
        window.getAppLang() === "ar"
      );
      yield put(getCountriesDone({ data }));
    }
  } catch {
    yield put(getCountriesDone({ data: [] }));
    return;
  }
}

export function* watchGetCountries() {
  yield takeLatest(GET_COUNTRIES, performGetCountries);
}
