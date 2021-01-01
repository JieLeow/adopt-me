import React from "react";

export default function Pet({ name, animal, breed }) {
  //why export default? because can be imported with any name
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h2", {}, animal),
  //     React.createElement("h2", {}, breed),
  //   ]);

  return (
    //this div gets translated to the code above, only 1 div because only can return 1 thing.

    <div>
      <h1>Name: {name.toUpperCase()}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
    //note: curly braces are for js expressions (RHS of js)
  );
}
