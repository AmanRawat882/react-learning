import React from "react";

export default function Pet({ name, animal, Breed }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{animal}</h1>
      <h1>{Breed}</h1>
    </div>
  );
}
