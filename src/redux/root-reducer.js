import { combineReducers } from "redux";
import headerReducer from "./header/header.reducer";
import movieDetailsReducer from './movieDetails/movieDetails.reducer'


const rootReducer = combineReducers({
  header: headerReducer,
  movieDetails: movieDetailsReducer,

});

export default rootReducer