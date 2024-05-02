import React, { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com/users";
export default function FetchData() {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}`).then((response) => {
      setUsers(response.data);
    });
  }, []);
  console.log("user", user);

  return (
    <ul>
      {user.map((e, index) => {
        return <li key={index}>{e.name}</li>;
      })}
    </ul>
  );
}
