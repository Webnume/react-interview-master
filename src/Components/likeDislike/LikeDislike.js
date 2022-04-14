import React, { useReducer } from "react";
import "./LikeDislike.scss"

const HANDLE_LIKE = Symbol("HANDLE_LIKE");
const HANDLE_DISLIKE = Symbol("HANDLE_DISLIKE");

const reducer = (state, action) => {
  const { likes, dislikes, active } = state;

  switch (action.type) {
    case HANDLE_LIKE:
      return {
        ...state,
        likes: state.likes + 1,
        dislikes: active === "dislike" ? dislikes - 1 : dislikes,
        active: "like",
      };
    case HANDLE_DISLIKE:
      return {
        ...state,
        likes: active === "like" ? likes - 1 : likes,
        active: "dislike",
        dislikes: dislikes + 1,
      };
    default:
      return state;
  }
};

const LikeDislike = ({ initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { likes, dislikes, active } = state;
  return (
    <div className="reviews">
      <div
        className="like"
        style={{
          color: active === "like" ? "green" : "black",
          marginRight: "10px",
        }}
        onClick={() =>
          active !== "like" ? dispatch({ type: HANDLE_LIKE }) : null
        }
      >
        {likes}
      </div>
      <div
        className="dislike"
        style={{ color: active === "dislike" ? "red" : "black" }}
        onClick={() =>
          active !== "dislike" ? dispatch({ type: HANDLE_DISLIKE }) : null
        }
      >
        {dislikes}
      </div>
    </div>
  );
};

export { LikeDislike };
