import React from "react";
import "./MovieCard.scss";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../redux/actions/moviesActions";
import { LikeDislike } from "../likeDislike/LikeDislike";

function MovieCard({ movieData }) {
  const { id, title, category } = movieData;
  const dispatch = useDispatch();
  return (
    <section className="movie">
      <h2>{title}</h2>
      <span className="close" onClick={() => dispatch(deleteMovie(id))}></span>
      <div className="category">
        {category}
      </div>
      <LikeDislike initialState={movieData} />
    </section>
  );
}

export default MovieCard;
