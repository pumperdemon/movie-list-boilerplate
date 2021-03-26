import React from "react";
import App from './App';
import Movies from './movies.jsx';

const MovieList = (props) => (
  <ul>
    {props.videos.map((item, i) => (
      <Movies key={item+i} movie={item} />
    ))}
  </ul>
)

export default MovieList;