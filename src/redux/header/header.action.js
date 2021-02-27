import HeaderActionTypes from './header.type'

export const searchInputChange = (text) => ({
    type: HeaderActionTypes.SEARCH_INPUT_CHANGE,
    payload: text
})

export const updateSearchText = (text) => ({
    type: HeaderActionTypes.CHANGE_SEARCH_TEXT,
    payload: text
})

export const updateMovieList = (list) => ({
    type: HeaderActionTypes.UPDATE_MOVIE_LIST,
    payload: list
})