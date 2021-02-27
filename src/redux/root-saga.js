import { call, all, takeLatest } from 'redux-saga/effects';
// import { fetchCollectionsAsync } from './shop/shop.sagas';
// import { userSagas } from './user/user.sagas'
import { headerSagas } from './header/header.sagas'
import { movieDetailsSagas } from './movieDetails/movieDetails.sagas';
// import ShopActionTypes from './shop/shop.type'

export default function* rootSaga() {
    yield all([
        call(headerSagas),
        call(movieDetailsSagas)
    ])
}