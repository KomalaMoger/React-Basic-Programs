import React, { useState } from "react";
export default function UserNamedata() {
  const [username, setUsername] = useState("");
  const [display, setDisplay] = useState("");
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(username);
  };
  return (
    <>
      <h1>{display}</h1>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input type="text" value={username} onChange={(e) => handleChange(e)} />
        <input type="submit" />
      </form>
    </>
  );
}
