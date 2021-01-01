// -------------- FIRST OF ALL -------------------------//
const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Luna"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Havanese"),
  ]);
};

//it is like a rubber stamp
const App = () =>
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);

//this is now u stamp the stamp
ReactDOM.render(React.createElement(App), document.getElementById("root"));

//-----------------------------PASSING IN COMPONENT PROPS ----------------------------//

const Pet2 = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App2 = () =>
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
  ]);

ReactDOM.render(React.createElement(App2), document.getElementById("root"));

//--------------------------- DESTRUCTURING PROPS ------------------------------//
const Pet3 = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

/** --------------------  NOTES -------------------------
 * React.createElement returns an react element (in lesson 1&2, a tag name string)
        //param1 : html tag, 
        //param2: tag attribute(s)
        //param3: what's inside the tag (an html element, eg <p>hello world!</p>);
 *
 *  //the power of react is that: u can have components that is put inside components
 *  //that is put inside components. REUSABILITY!
 * 
 * variables verity?? 
 * 
 * ReactDOM.render actually renders the component to the browser
 *
 */
