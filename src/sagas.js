import { fork } from 'redux-saga/effects'
import { saga as appSaga } from './modules/app'

export default function*() {

  yield fork(appSaga) // run app last once all subsystems are up
}
