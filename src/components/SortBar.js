import React from "react";

const SortBar = ({ setSortType }) => {
  return (
    <div className="sort-bar">
      <label>Sort by: </label>
      <button onClick={() => setSortType("health")}>Health</button>
      <button onClick={() => setSortType("damage")}>Damage</button>
      <button onClick={() => setSortType("armor")}>Armor</button>
    </div>
  );
};

export default SortBar;
