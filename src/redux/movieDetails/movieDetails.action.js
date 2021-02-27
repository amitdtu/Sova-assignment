import MovieDetailsActionTypes from './movieDetails.type'

export const fetchMovieDetails = id => ({
    type: MovieDetailsActionTypes.FETCH_MOVIE_DETAILS,
    payload: id,
})

export const fetchMovieDetailsStart = () => ({
    type: MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_START,
})

export const fetchMovieDetailsSuccess = data => ({
    type: MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_SUCCESS,
    payload: data,
})

export const fetchMovieDetailsFailure = error => ({
    type: MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_FAILURE,
    payload: error,
})