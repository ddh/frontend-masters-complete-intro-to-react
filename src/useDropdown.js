import React, { useState } from "react"; // We're basing off of useState

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState); // Hooks always first. This is going to be a generic dropdown
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={options.length === 0}
      >
        <option>All</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  // returning Dropdown so it does all of the dropdown stuff
  return [state, Dropdown, setState]; // we return an array of these, so it's basically what a Hook returns
};

export default useDropdown; // always need this at the end of your file
