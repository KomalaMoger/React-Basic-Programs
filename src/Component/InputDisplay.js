import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
export default function InputDisplay() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <input
          type="text"
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <br />
        <h1>{name}</h1>
        <input
          type="email"
          onChange={(e) => {
            handleEmailChange(e);
          }}
        />
        <br />
        <h1>{email}</h1>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
