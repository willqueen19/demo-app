import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import uberapi from '../api/index.js'  //edit this before finishing
import actions from './actions'



function* fetchPriceSaga(action) {
    try {
      const price = yield call(Api.fetchPrice, action.state);
      yield put({
        type: 'FETCH_PRICE_SUCCESS',
        price: price
      });
    } catch (e) {
      yield put({
        type: 'FETCH_PRICE_FAILURE',
        message: e.message
      });
    }
}

function* mySagas() {
    yield takeEvery('FETCH_PRICE_REQUESTED', fetchPriceSaga);
}

export default mySagas;
