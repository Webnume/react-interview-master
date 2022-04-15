import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterMovie } from "../../redux/actions/moviesActions";

/**
 * It's a form that filters movies based on their category.
 * @returns The return is a fieldset with a legend and a label.
 */
function FilterForm() {
  const [searchArray, setSearchArray] = useState([]);
  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state.movies);

/**
 * It returns an array of all the unique categories in the movies array.
 * @returns An array of all the categories of movies.
 */
  const getAllMoviesCategories = () => {
    const moviesCategories = [];
    for (const movie of movies) {
      !moviesCategories.includes(movie.category) &&
        moviesCategories.push(movie.category);
    }
    return moviesCategories;
  };

  /**
   * If the checkbox is checked, add the value of the checkbox to the search array, otherwise delete the
   * value of the checkbox from the search array.
   * @param e - the event object
   */
  const filterMoviesHandler = (e) => {
    const checked = e.target.checked;
    const searchValue = e.target.value;
    checked
      ? addToSearchArray(searchValue)
      : deleteFromSearchArray(searchValue);
  };

  /**
   * If the searchValue is not already in the searchArray, then add it to the searchArray.
   * @param searchValue - The value of the input field
   */
  const addToSearchArray = (searchValue) => {
    !searchArray.includes(searchValue) &&
      setSearchArray((oldArray) => [...oldArray, searchValue]);
  };

  /**
   * It takes a searchValue as an argument and returns a new array that is the same as the old array
   * except for the item that matches the searchValue.
   * @param searchValue - The value of the input field
   */
  const deleteFromSearchArray = (searchValue) => {
    setSearchArray(searchArray.filter((item) => item !== searchValue));
  };

  useEffect(() => {
    dispatch(filterMovie(searchArray));
  }, [searchArray, dispatch]);

  return (
    <fieldset style={{ float: "left" }}>
      <legend>Choose category to show</legend>
      {(getAllMoviesCategories().length !== 0) ? (
        getAllMoviesCategories().map((c) => (
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
