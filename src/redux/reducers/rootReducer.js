import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
// import paginationReducer from './paginationReducer';

const rootReducer = combineReducers({ 
    movies: moviesReducer,
    // pagination: paginationReducer
})

export default rootReducer;