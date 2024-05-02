import React, { useState } from "react";
import Button from "react-bootstrap/Button";
export default function Random() {
  const [random, setRandom] = useState(0);
  const ran = Math.round(Math.random() * 100);
  const handleclick = () => {
    setRandom(ran);
  };
  return (
    <div>
      <h1 className="text-success">{random}</h1>
      <Button
        onClick={() => {
          handleclick();
        }}
      >
        random
      </Button>
    </div>
  );
}
