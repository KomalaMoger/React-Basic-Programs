import React, { useState } from "react";
export default function TextCount() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const handleChange = (e) => {
    const char = e.target.value;
    setText(char);
    setCount(char.length);
  };
  return (
    <>
      <h1>
        {text}-{count}
      </h1>
      <input type="text" vlaue={text} onChange={(e) => handleChange(e)} />
    </>
  );
}
