import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import MovieDetailsActionTypes from './movieDetails.type';
import {fetchMovieDetailsStart, fetchMovieDetailsSuccess} from './movieDetails.action'

import axios from "axios"
import { apiKey } from '../../key'


export function* fetchMovieDetailsAsync({payload}) {

    yield put(fetchMovieDetailsStart())
    
    const {data} = yield axios.get(`http://www.omdbapi.com/?i=${payload}&apikey=${apiKey}`)
    console.log(data)

    yield put(fetchMovieDetailsSuccess(data))
}

export function* fetchMovieDetails() {
    yield takeLatest(MovieDetailsActionTypes.FETCH_MOVIE_DETAILS, fetchMovieDetailsAsync)
}



export function* movieDetailsSagas(){
    yield all([ 
        call(fetchMovieDetails)
    ])
}