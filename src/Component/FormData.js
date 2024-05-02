import React, { useState } from "react";
export default function FormData() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  let formData;

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    formData = {
      username: username,
      email: email,
    };
    console.log("formData", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => handleInputChange(e)} />
      <br />
      <input
        type="text"
        onChange={(e) => {
          handleEmailChange(e);
        }}
      />
      <input type="submit" />
    </form>
  );
}
