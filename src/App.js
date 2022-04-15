import "./App.css";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import MovieCard from "./Components/moviecard/MovieCard";
import FilterForm from "./Components/filterForm/FilterForm";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "./redux/actions/moviesActions";

function App() {
  const dispatch = useDispatch();
  const { movies, filteredMovies } = useSelector((state) => state.movies);

  const moviesToDisplay = filteredMovies.length > 0 ? filteredMovies : movies;

  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage, setperPage] = useState(4);
  const [pageCount, setPageCount] = useState(0);

  /**
   * It takes the selected page number from the pagination component and sets the offset state to the
   * selected page number plus one
   * @param e - The event object
   */
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  /**
   * We're taking the moviesToDisplay array, slicing it into chunks, and then mapping over each
   * chunk to create a MovieCard component for each movie
   */

  useEffect(() => {
    const getData = async () => {
      const slice = moviesToDisplay.slice(offset, offset + perPage);
      const postData = slice.map((movie) => (
        <div key={movie.id} id={movie.id}>
          <MovieCard movieData={movie} />
        </div>
      ));
      setData(postData);
      setPageCount(Math.ceil(moviesToDisplay.length / perPage));
    };
    getData();
  }, [offset, moviesToDisplay, perPage]);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>MY VIDEO LIST</h1>
      <FilterForm moviesData={moviesToDisplay} />
      {moviesToDisplay.length > 0 && (
        <ul className="per-page">
          Afficher les résultats par
          <li onClick={() => setperPage(4)}>4</li>
          <li onClick={() => setperPage(8)}>8</li>
          <li onClick={() => setperPage(12)}>12</li>
        </ul>
      )}
      <div className="movieWrapper">{data}</div>
      {moviesToDisplay.length > 0 && (
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      )}
    </div>
  );
}

export default App;
