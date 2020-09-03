import React, { useState, useEffect } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // [a, b] is destructuring bc we know useState will return
  // "Seattle, WA" is the default state
  // Whenever you use a hook, you always get two things back in an array: [currentState of it, the update function]
  // !hooks NEVER go into if statements
  const [location, setLocation] = useState("Seattle, WA"); // This is a hook. ALL hooks begin with "use"
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS); // `AnimalDropdown` is anything we want to name it
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);



  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
