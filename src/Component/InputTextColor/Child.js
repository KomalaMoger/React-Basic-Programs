import React, { useState } from "react";
export default function ChildComponent({ setColor }) {
  const [childcolor, setChildColor] = useState("");
  const handleChange = (e) => {
    const newColor = e.target.value;
    setChildColor(newColor);
    setColor(newColor);
  };
  return (
    <>
      <label>Child Component</label>
      <input
        type="text"
        value={childcolor}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </>
  );
}
