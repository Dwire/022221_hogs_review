import React from "react";

const HogFilter = ({handleHogSort, handleHogFilter, hogFilter, hogSort}) => {
  return (
    <div>
      <label for="greased-check">Greased?</label>
      <input type="checkbox" id="greased-check" checked={hogSort ? "yes" : null} onChange={handleHogSort}/>

      <select onChange={handleHogFilter} value={hogFilter}>
        <option value="all" >All</option>
        <option value="weight" >Weight</option>
        <option value="name" >Name</option>
      </select>
    </div>
  );
};

export default HogFilter;
