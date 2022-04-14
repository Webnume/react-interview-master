import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterMovie } from "../../redux/actions/moviesActions";

function FilterForm({ moviesData }) {
  const cloneMoviesData = [...moviesData];
  const [searchArray, setSearchArray] = useState([]);

  const dispatch = useDispatch();

  //   console.log(moviesData);

  const getAllMoviesCategories = () => {
    const moviesCategories = [];
    for (const movie of moviesData) {
      !moviesCategories.includes(movie.category) &&
        moviesCategories.push(movie.category);
    }
    return moviesCategories;
  };

  const filterMovies = (e) => {
    const checked = e.target.checked;
    const searchValue = e.target.value;
    checked
      ? addToSearchArray(searchValue)
      : deleteFromSearchArray(searchValue);
  };

  const addToSearchArray = (searchValue) => {
    !searchArray.includes(searchValue) &&
      setSearchArray((oldArray) => [...oldArray, searchValue]);
    console.log(searchArray.length);
    dispatch(filterMovie(moviesData, searchArray));
  };

  const deleteFromSearchArray = (searchValue) => {
    console.log("delete");
    const newsearchArray = searchArray.filter((item) => item !== searchValue);
    setSearchArray(newsearchArray);
    dispatch(filterMovie(moviesData, searchArray));
  };

  //   useEffect(() => {
  //     dispatch(filterMovie());
  //   }, []);
  useEffect(() => {
    console.log(searchArray);
  }, [searchArray]);

  return (
    <form>
      <fieldset style={{ float: "left" }}>
        <legend>Choose category to show</legend>
        {!(getAllMoviesCategories().length === 0) ? (
          getAllMoviesCategories().map((c, i) => (
            <label key={c}>
              <input
                type="checkbox"
                value={c}
                onChange={(e) => filterMovies(e)}
              />
              {c}
            </label>
          ))
        ) : (
          <p>No film in dataBase</p>
        )}
      </fieldset>
    </form>
  );
}

export default FilterForm;
