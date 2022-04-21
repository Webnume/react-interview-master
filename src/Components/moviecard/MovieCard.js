import "./MovieCard.scss";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../redux/actions/moviesActions";
import { LikeDislike } from "../likeDislike/LikeDislike";

/**
 * It's a function that takes in a movieData object as a prop and returns a section with a title, a
 * close button, a category, and a LikeDislike component.
 * @returns A React component that renders a movie card.
 */
function MovieCard({ movieData }) {
  const { id, title, category, cover } = movieData;
  const dispatch = useDispatch();

  return (
    <section
      className="movie"
      style={{
        backgroundImage: "url(" + cover + ")",
      }}
    >
      <h2>{title}</h2>
      <span className="close" onClick={() => dispatch(deleteMovie(id))}></span>
      <div className="category">{category}</div>
      <LikeDislike initialState={movieData} />
    </section>
  );
}

export default MovieCard;
