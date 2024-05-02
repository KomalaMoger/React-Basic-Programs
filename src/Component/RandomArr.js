import React, { useState } from "react";
import Button from "react-bootstrap/Button";
export default function RandomArr() {
  const [random, setRandom] = useState("");
  const [arr, setArr] = useState([]);
  const Ran = Math.round(Math.random() * 100);
  const handldeClick = () => {
    setArr((arr) => [...arr, Ran]);
    setRandom(Ran);
  };
  return (
    <div>
      <h1 className="text-primary">{random}</h1>
      <Button
        onClick={() => {
          handldeClick();
        }}
      >
        random
      </Button>
      {console.log(random, "random")}
      <ul>
        {arr.map((e) => {
          return <li className="text-success">{e}</li>;
        })}
      </ul>
    </div>
  );
}
