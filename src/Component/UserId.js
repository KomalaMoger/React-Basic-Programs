import React, { useState } from "react";
import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com/users?id=";
export default function UserId() {
  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState("");

  const handleId = (e) => {
    setUserId(e.target.value);
  };
  console.log("user", user);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`${baseUrl}${userId}`).then((response) => {
      setUser(response.data);
    });
  };
  return (
    <>
      <h3 className="text-primary">user.length-{user.length}</h3>
      <h6 className="text-primary-emphasis">Get UserInfo</h6>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="enter id"
          value={userId}
          onChange={(e) => handleId(e)}
        />
        <input type="submit" />
      </form>
      <ul>
        {user.map((data) => {
          return (
            <div>
              <li>id-{data.id}</li>
              <li>name-{data.name}</li>
              <li>email-{data.email}</li>
              <li>Address-City-{data.address.city}</li>
              <li>phone-{data.phone}</li>
              <li>website-{data.website}</li>
            </div>
          );
        })}
      </ul>
    </>
  );
}
