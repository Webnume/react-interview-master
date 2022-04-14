import React, { useReducer } from "react";
import "./LikeDislike.scss"

const HANDLE_LIKE = Symbol("HANDLE_LIKE");
const HANDLE_DISLIKE = Symbol("HANDLE_DISLIKE");

/**
 * If the user clicks on the like button, increase the number of likes by 1 and if the user clicks on
 * the dislike button, increase the number of dislikes by 1.
 * 
 * If the user clicks on the like button and the active state is dislike, decrease the number of
 * dislikes by 1.
 * 
 * If the user clicks on the dislike button and the active state is like, decrease the number of likes
 * by 1.
 * 
 * If the user clicks on the like button, set the active state to like.
 * 
 * If the user clicks on the dislike button, set the active state to dislike.
 * 
 * If the user clicks on the like button and the active state is like, do nothing.
 * 
 * If the user clicks on the dislike button and the active state is dislike, do nothing.
 * 
 * If the user clicks on the like button and the active state is dislike, decrease the
 * @param state - the current state of the application
 * @param action - { type: "HANDLE_LIKE" }
 * @returns The state is being returned.
 */
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

/**
 * It's a function that takes an initialState object as an argument and returns a div with two child
 * divs, one for likes and one for dislikes. 
 * 
 * The child divs have a className and a style property. The style property is an object with two
 * key-value pairs. The first key is color and the value is either green or black. The second key is
 * marginRight and the value is 10px. 
 * 
 * The child divs also have an onClick property. The onClick property is a function that takes an event
 * as an argument. The function returns a dispatch function that takes an object as an argument. The
 * object has a type property and a value of HANDLE_LIKE or HANDLE_DISLIKE. 
 * 
 * The child divs also have a text node that displays the value of the likes or dislikes property of
 * the state object.
 * @returns The LikeDislike component is being returned.
 */
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
