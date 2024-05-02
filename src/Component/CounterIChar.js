import React, { useState } from "react";
export default function CounterChar() {
  const [count, setCount] = useState(0);
  const [type, setType] = useState("");
  const handleChange = (e) => {
    let char = e.target.value;
    setType(char);
    setCount(char.length);
  };
  return (
    <div>
      <Child handleChange={handleChange} count={count} type={type} />
    </div>
  );
}
const Child = ({ handleChange, count, type }) => {
  return (
    <div>
      <h1>{count}</h1>
      <input
        type="text"
        value={type}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
};
