import { all, call, put, takeLatest, delay } from 'redux-saga/effects';
import { updateSearchText, updateMovieList } from './header.action'

import HeaderActionTypes from './header.type';

import axios from "axios"

import { apiKey } from '../../key'


export function* searchInputAsync({payload}) {

    yield put(updateSearchText(payload))
    
    // for debouncing
    yield delay(250)

    const {data} = yield axios.get(`http://www.omdbapi.com/?s=${payload}&apikey=${apiKey}`)
    
    let list = [];
    if(data.Search) list = data.Search
    yield put(updateMovieList(list))
}

export function* onSearchInputChange() {
    yield takeLatest(HeaderActionTypes.SEARCH_INPUT_CHANGE, searchInputAsync)
}



export function* headerSagas(){
    yield all([ 
        call(onSearchInputChange)
    ])
}