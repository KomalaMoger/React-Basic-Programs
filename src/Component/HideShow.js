import React, { useState } from "react";
import { Button } from "react-bootstrap";
export default function HideShow() {
  const [show, setShow] = useState(false);
  const handleHide = () => {
    setShow(!show);
  };
  return (
    <>
      {show && <p className="text-primary">there is something</p>}
      <Button onClick={handleHide}>{show ? "show" : "hide"}</Button>
    </>
  );
}
