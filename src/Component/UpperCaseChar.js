import React, { useState } from "react";
export default function UpperCaseChar() {
  const [char, setChar] = useState("");
  const handleChange = (e) => {
    setChar(e.target.value.toUpperCase());
  };
  return (
    <div>
      <h4>all letters are in capital</h4>
      <textarea
        type="text"
        value={char}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
}
