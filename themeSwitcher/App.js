import { useState } from "react";

function ThemeSwitcher() {
  const [color, setColor] = useState("#ffffff");
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <h2>Theme Switcher with Color Picker</h2>
      <input type="color" value={color} onChange={handleChange}></input>
      <div
        style={{ backgroundColor: color, padding: "20px", marginTop: "10px" }}
      >
        <p>
          The background color of this box changes based on your selection.{" "}
        </p>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
