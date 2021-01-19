import React from "react";
export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </a>
  );
}

//========================= OLD React Code====================================
// import React from "react";

// export default function Pet({ name, animal, breed }) {
//   //props destructuring
//   //why export default? because can be imported with any name
//   //   return React.createElement("div", {}, [
//   //     React.createElement("h1", {}, name),
//   //     React.createElement("h2", {}, animal),
//   //     React.createElement("h2", {}, breed),
//   //   ]);

//   return (
//     //this div gets translated to the code above, only 1 div because only can return 1 thing.

//     <div>
//       <h1>Name: {name.toUpperCase()}</h1>
//       <h2>{animal}</h2>
//       <h2>{breed}</h2>
//     </div>
//     //note: curly braces are for js expressions (RHS of js)
//   );
// }
