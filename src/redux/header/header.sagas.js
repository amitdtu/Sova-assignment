import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { updateSearchText, updateMovieList } from './header.action'

import HeaderActionTypes from './header.type';

import axios from "axios"

import { apiKey } from '../../key'


export function* searchInputAsync({payload}) {

    yield put(updateSearchText(payload))
    
    // Should do debouncing.
    // Can use a separate function to call APIs.

    const {data} = yield axios.get(`http://www.omdbapi.com/?s=${payload}&apikey=${apiKey}`)
    let list = [];
    if(data.Search) list = data.Search
    yield put(updateMovieList(list))
    // console.log(data)
}

export function* onSearchInputChange() {
    yield takeEvery(HeaderActionTypes.SEARCH_INPUT_CHANGE, searchInputAsync)
}



export function* headerSagas(){
    yield all([ 
        call(onSearchInputChange)
    ])
}