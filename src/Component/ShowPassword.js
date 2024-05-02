import React, { useState } from "react";
export default function ShowPassword() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  let formData;

  const handleChangeInput = (e) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleCheckbox = (e) => {
    setShow(!show);
  };
  const handelSubmit = () => {
    formData = {
      username: username,
      password: password,
    };
    console.log(formData, "formData");
  };

  return (
    <form onSubmit={handelSubmit}>
      <label>username</label>
      <input
        type="text"
        onChange={(e) => {
          handleChangeInput(e);
        }}
      />
      <br />
      <label>password</label>
      <input
        type={show ? "text" : "password"}
        onChange={(e) => {
          handleChangePassword(e);
        }}
      />
      <br />
      <label>showpassword</label>
      <input
        type="checkbox"
        onChange={(e) => {
          handleCheckbox(e);
        }}
      />
      <input type="submit" />
    </form>
  );
}
