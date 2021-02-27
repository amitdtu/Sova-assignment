import { call, all, takeLatest } from 'redux-saga/effects';
import { headerSagas } from './header/header.sagas'
import { movieDetailsSagas } from './movieDetails/movieDetails.sagas';

export default function* rootSaga() {
    yield all([
        call(headerSagas),
        call(movieDetailsSagas)
    ])
}