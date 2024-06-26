import React, { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h5>{count}</h5>
      <button onClick={handleClick}>click</button>
    </div>
  );
}
