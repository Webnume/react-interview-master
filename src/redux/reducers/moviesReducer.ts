import { AnyAction } from "redux";

interface IMovie {
  id: number;
  category: string;
}

interface MoviesState {
  movies: IMovie[];
  filteredMovies: IMovie[];
}

const initialState: MoviesState = {
  movies: [],
  filteredMovies: [],
};

const moviesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "GET_MOVIE":
      return {
        ...state,
        movies: action.movies,
      };

    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.id),
        filteredMovies: state.filteredMovies.filter(
          (movie) => movie.id !== action.id
        ),
      };
    case "FILTER_MOVIE":
      const filteredData = [];
      for (const searchValue of action.searchArray) {
        const filteredPartial = state.movies.filter(
          (movie) => movie.category === searchValue
        );
        filteredData.push(filteredPartial);
      }
      
      const result = ([] as any[]).concat.apply([], filteredData);

      return {
        ...state,
        filteredMovies: result,
      };
    default:
      return state;
  }
};

export default moviesReducer;
