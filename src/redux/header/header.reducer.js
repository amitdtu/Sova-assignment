import HeaderActionTypes from "./header.type";

const INITIAL_STATE = {
  searchText: '',
  movieList: [],
  isDarkMode: false,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case HeaderActionTypes.CHANGE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload
      };
      
    case HeaderActionTypes.UPDATE_MOVIE_LIST:
      return {
        ...state,
        movieList: action.payload
      };
 
      
    case HeaderActionTypes.TOGGLE_THEME_CHECKBOX:
      return {
        ...state,
        isDarkMode: !state.isDarkMode
      };
 

    default:
      return state;
  }
};

export default headerReducer;