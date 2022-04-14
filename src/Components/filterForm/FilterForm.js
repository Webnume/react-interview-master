import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterMovie } from "../../redux/actions/moviesActions";

function FilterForm() {
  const [searchArray, setSearchArray] = useState([]);
  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state.movies);

  const getAllMoviesCategories = () => {
    const moviesCategories = [];
    for (const movie of movies) {
      !moviesCategories.includes(movie.category) &&
        moviesCategories.push(movie.category);
    }
    return moviesCategories;
  };


  const filterMoviesHandler = (e) => {
    const checked = e.target.checked;
    const searchValue = e.target.value;
    checked
      ? addToSearchArray(searchValue)
      : deleteFromSearchArray(searchValue);
  };

  const addToSearchArray = (searchValue) => {
    !searchArray.includes(searchValue) &&
      setSearchArray((oldArray) => [...oldArray, searchValue]);
  };

  const deleteFromSearchArray = (searchValue) => {
    console.log("delete");
    setSearchArray(searchArray.filter((item) => item !== searchValue));
  };

  useEffect(() => {
    dispatch(filterMovie(searchArray));
  }, [searchArray, dispatch]);

  return (
    <fieldset style={{ float: "left" }}>
      <legend>Choose category to show</legend>
      {!(getAllMoviesCategories().length === 0) ? (
        getAllMoviesCategories().map((c, i) => (
          <label key={c}>
            <input
              type="checkbox"
              value={c}
              onChange={(e) => filterMoviesHandler(e)}
            />
            {c}
          </label>
        ))
      ) : (
        <p style={{ fontWeight: "700" }}>
          Sorry all films are deleted so no more left to display :(
        </p>
      )}
    </fieldset>
  );
}

export default FilterForm;
