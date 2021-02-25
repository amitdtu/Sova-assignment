import HeaderActionTypes from "./header.type";

const INITIAL_STATE = {
  searchText: '',
  movieList: []
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
 

    default:
      return state;
  }
};

export default headerReducer;