import HeaderActionTypes from './header.type'

export const searchInputChange = (e) => ({
    type: HeaderActionTypes.SEARCH_INPUT_CHANGE,
    payload: e.target.value
})

export const updateSearchText = (text) => ({
    type: HeaderActionTypes.CHANGE_SEARCH_TEXT,
    payload: text
})

export const updateMovieList = (list) => ({
    type: HeaderActionTypes.UPDATE_MOVIE_LIST,
    payload: list
})