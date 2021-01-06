import React from "react";
import {render} from "react-dom";
import Pet from "./Pet";

const App = () => {
   /* React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Sheru",
      animal: "Dog",
      Breed: "Rotwiler",
    }),
    React.createElement(Pet, {
      name: "Nina",
      animal: "Cat",
      Breed: "Black Panther",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      Breed: "KingFisher",
    }),
  ]); */
  return (
      <div>
          <h1 id="Something Important">Adopt Me!</h1>
          <Pet name="Sheru" animal="Dog" Breed="Rotwiler" />
          <Pet name="Nina" animal="Bird" Breed="Black Panther" />
          <Pet name="Pepper" animal="Dog" Breed="KingFisher" />
      </div>
  );
};

render(<App />, document.getElementById("root"));
