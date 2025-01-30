import React from "react";

const FilterBar = ({ setFilterType }) => {
  return (
    <div className="filter-bar">
      <label>Filter by Class: </label>
      {["Support", "Medic", "Assault", "Defender", "Captain", "Witch"].map((cls) => (
        <button key={cls} onClick={() => setFilterType(cls)}>{cls}</button>
      ))}
      <button onClick={() => setFilterType("")}>Reset</button>
    </div>
  );
};

export default FilterBar;
