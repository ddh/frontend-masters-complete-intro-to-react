import React from "react";
import { render } from "react-dom"; // This is how you import just the specific
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  // React.createElement(
  //   "div", // This parameter is what kind of element/tag
  //   {}, // All the attributes I want to give component
  //   [
  //     React.createElement("h1", {}, "Adopt Me!"), // Any number of components
  //     React.createElement(Pet, {
  //       name: "Luna",
  //       animal: "Dog",
  //       breed: "Havanese",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Juniper",
  //       animal: "Cat",
  //       breed: "Tabby",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Appa",
  //       animal: "Sky Bisons",
  //       breed: "Fluffy",
  //     }),
  //   ]
  // );

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );

};
render(<App />, document.getElementById("root"));
