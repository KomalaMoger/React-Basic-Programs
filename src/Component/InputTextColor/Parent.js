import React, { useState } from "react";
import ChildComponent from "./Child";
export default function ParentComponent() {
  const [color, setColor] = useState("");
  return (
    <>
      <h4 style={{ color: color }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
        perspiciatis obcaecati sit debitis ipsum incidunt dolores ex officia?
        Illo, perferendis.
      </h4>
      <ChildComponent setColor={setColor} />
    </>
  );
}
