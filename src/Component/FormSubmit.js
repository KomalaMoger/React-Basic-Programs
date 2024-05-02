import React, { useState } from "react";
export default function FormSubmit() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const handleChangeName = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      username: username,
      email: email,
    };
    setData(formData);
  };
  return (
    <>
      <h1>{data ? data.username : ""}</h1>
      <h1>{data ? data.email : ""}</h1>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input type="text" onChange={(e) => handleChangeName(e)} />
        <br />
        <label>email</label>
        <input type="email" onChange={(e) => handleChangeEmail(e)} />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
