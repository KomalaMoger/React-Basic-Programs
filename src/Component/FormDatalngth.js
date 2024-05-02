import React, { useState } from "react";
export default function FormDatalngth() {
  const [username, setUsername] = useState("");
  let formData;
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    formData = {
      username: username,
    };
    console.log("username", username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>username</label>
      <input
        type="text"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input type="submit" />
      <br />
      <span>username-length-{username.length}</span>
    </form>
  );
}
