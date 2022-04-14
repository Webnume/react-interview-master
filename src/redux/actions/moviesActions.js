import { movies$ } from "../../data/movies";

/**
 * We're using the dispatch function to dispatch an action to the reducer
 * @returns A function that takes in dispatch as a parameter.
 */
export const getMovies = () => {
  return (dispatch) => {
    movies$
      .then((movies) => {
        dispatch({
          type: "GET_MOVIE",
          movies,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};


/**
 * When the deleteMovie function is called, dispatch an action with the type of DELETE_MOVIE and the id
 * of the movie to be deleted.
 * @param id - The id of the movie to be deleted.
 * @returns An object with a type and an id.
 */
export const deleteMovie = (id) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_MOVIE",
      id: id,
    });
  };
};

/**
 * It takes in an array of search terms, and then dispatches an action to the reducer with the type
 * "FILTER_MOVIE" and the array of search terms
 * @param searchArray - This is the array of movies that we want to display.
 * @returns An object with a type and a searchArray.
 */
export const filterMovie = (searchArray) => {
  // console.log(searchArray);
  return (dispatch) => {
    dispatch({
      type: "FILTER_MOVIE",
      searchArray,
    });
  };
};
