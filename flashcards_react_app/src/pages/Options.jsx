import '../css/Options.css'
import React, { useEffect, useState } from 'react';

function Options() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkItem") === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkItem", darkMode);
  }, [darkMode]);

  return (
    <div className="main-div">
      <span>Dark Mode</span>
      <label className="switch">
        <input
          type="checkbox"
          id="darkModeInput"
          checked={darkMode}
          onChange={e => setDarkMode(e.target.checked)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}
export default Options;