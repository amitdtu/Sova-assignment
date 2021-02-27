import { movieDetailsSagas } from './movieDetails.sagas';
import MovieDetailsActionTypes from './movieDetails.type';

const INITIAL_STATE = {
    isFetching: false,
    data: null,
    error: null,
}

const movieDeatilsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_START:
            return {
                ...state,
                isFetching: true
            }

        case MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            }

        case MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_FAILURE:
            return {
                ...state,
                isFetching: false,
                data: null,
                error: action.payload
            }
        
        default:
            return state
    }
}

export default movieDeatilsReducer