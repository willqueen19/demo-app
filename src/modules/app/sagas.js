import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Uber from '../api/index'  //edit this before finishing
import * as actions from './actions'
import * as types from './actionTypes'

const currentPrice = (state) => {
  return state.price
}

function* fetchPriceSaga(action) {
    const response      = yield call(Uber.GET, action.payload);
    const responseJSON  = yield response.json();
    const estimatePrice = responseJSON.prices[1].estimate;
    yield put(actions.returnPrice(estimatePrice))
}

function* mySagas() {
    console.log('started sagas!')
    yield takeEvery(types.FETCH_PRICE_REQUEST, fetchPriceSaga);
}

export default mySagas;
