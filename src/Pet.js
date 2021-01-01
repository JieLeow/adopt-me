import React from "react";

export default function Pet({ name, animal, breed }) {
  //why export default? because can be imported with any name
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
}
