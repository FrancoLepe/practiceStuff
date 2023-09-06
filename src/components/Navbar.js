import React, { useState } from "react";

function Navbar({ active, setActive, handleClick }) {
  return (
    <div>
      <h2>Navbar</h2>
      <button
        className={active ? "darkmode" : "lightmode"}
        onClick={handleClick}
      >
        {active ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Navbar;
