import React, { useState } from "react";
export default function CharWord() {
  const [char, setChar] = useState(0);
  const [word, setWord] = useState(0);

  const handleChange = (e) => {
    const text = e.target.value;
    setChar(text.length);
    setWord(text.split(" ").length - 1);
  };

  return (
    <div>
      <div>
        {char},{word}
      </div>
      <textarea
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
}
