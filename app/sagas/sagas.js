import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import uberapi from '../action/uberapi.js' //edit this before finishing



function* fetchPrice(action) {
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
    yield takeEvery('USER_FETCH_REQUESTED', fetchPrice);
}

export default mySaga;
