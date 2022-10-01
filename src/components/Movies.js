import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    <div>
      {movies[0].title}-
      {movies[0].time}
      <ul>
        <li>{movies[0].genres}</li>
      </ul>
    </div>
    <div>
      {movies[1].title} -
      {movies[1].time}
      <ul>
        <li>{movies[1].genres}</li>
      </ul>
      <div>
        {movies[2].title}-
        {movies[2].time}
        <ul>
          <li>{movies[2].genres}</li>
        </ul>
      </div>
    </div>
  </div>;
}

export default Movies;
