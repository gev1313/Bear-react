import { all, call, put, takeLatest ,takeEvery } from "redux-saga/effects";
import {getSinglBearsRequestSucceed, getBearsRequestSucceed, loadingType, showError, getRandomBearRequestSucceed } from "../store/action-creaters/bearsActionsCreator";
import { request } from "../services/requestService";
import { BEARS_ACTION_TYPES } from "../store/actions/bearsActions";

export function* getBears({ payload }) {
  try {
    const { searchedBears, page } = payload;
    yield put(loadingType());
    const { data } = yield call(request, "GET", `https://api.punkapi.com/v2/beers?beer_name=${searchedBears}&page=${page}&per_page=6`, {});

    yield put(getBearsRequestSucceed(data));
  } catch (error) {
    yield put(showError(error.response.data.message))
  }
}

function* getSingleBear(action) {
  try {
    const { id } = action.payload;
    yield put(loadingType());
    const { data } = yield call(request, "GET", `https://api.punkapi.com/v2/beers/${id}`, {});
    console.log(data,3333333333333)
    yield put(getSinglBearsRequestSucceed(data));
  } catch (e) {
    yield put(showError(e.response.data.message))
  }
}

function* getRandomBear() {
  try {
    yield put(loadingType());
    const { data } = yield call(request, "GET", `https://api.punkapi.com/v2/beers/random`, {});
  console.log(data,444)
    yield put(getRandomBearRequestSucceed(data));
  } catch (e) {
    yield put(showError(e.response.data.message))
  }
}


export function* bearsSagas() {
  yield all([takeLatest(BEARS_ACTION_TYPES.BEARS_GET_REQUEST, getBears),
             takeLatest(BEARS_ACTION_TYPES.BEARS_GET_SINGLE_REQUEST, getSingleBear),
             takeEvery(BEARS_ACTION_TYPES.BEARS_RANDOM_REQUEST, getRandomBear)
            ]);
}




