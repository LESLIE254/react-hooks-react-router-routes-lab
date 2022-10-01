import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    <div>
      {actors[0].name}
      <ul>
        <li>{actors[0].movies}</li>
      </ul>
      <div>
        {actors[1].name}
        <ul>
          <li>{actors[1].movies}</li>
        </ul>
        <div>
          {actors[2].name}
          <ul>
            <li>{actors[2].movies}</li>
          </ul>
          <div>
            {actors[3].name}
            <ul>
              <li>{actors[3].movies}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Actors;
