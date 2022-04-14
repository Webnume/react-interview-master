const moviesReducer = (movies = [], action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return action.movies;
    case "DELETE_MOVIE":
      return movies.filter((movie) => movie.id !== action.payload);
    case "FILTER_MOVIE":
      // const filteredMovies = [...movies].filter(
      //   (movie) => movie.category === action.payload
      // // );
      // return filteredMovies.length > 0 ? filteredMovies : action.movies;

      // return movies.filter((item) => item !== action.payload)
      let filtered = action.movies.filter((movie) =>
        action.categories.indexOf(movie.categories)
      );
      console.log(action.movies, action.categories);
      return filtered;

    default:
      return movies;
  }
};

export default moviesReducer;
