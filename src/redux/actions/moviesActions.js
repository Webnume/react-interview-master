import { movies$ } from "../../data/movies";

export const getMovies = () => {
  return (dispatch) => {
    movies$
      .then((movies) => {
        // console.log(movies);
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

export const deleteMovie = (index) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_MOVIE",
      id: index,
    });
  };
};

export const filterMovie = (searchArray) => {
  // console.log(searchArray);
  return (dispatch) => {
    dispatch({
      type: "FILTER_MOVIE",
      searchArray,
    });
  };
};
