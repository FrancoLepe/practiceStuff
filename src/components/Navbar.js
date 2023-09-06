import React from "react";

function Navbar({ active, handleClick }) {
  return (
    <div>
      <h2>Navbar</h2>
      <button
        className={active ? "darkButton" : "lightButton"}
        onClick={handleClick}
      >
        {active ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Navbar;
