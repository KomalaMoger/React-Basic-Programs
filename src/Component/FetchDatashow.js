import React, { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com/users";
export default function FetchDatashow() {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  const fetcddata = () => {
    show &&
      axios.get(`${baseUrl}`).then((response) => {
        setUser(response.data);
      });
    !show && setUser([]);
  };

  useEffect(() => {
    fetcddata();
  });

  // console.log('user', user)
  console.log("show", show);
  return (
    <div>
      <button onClick={handleClick}>fetch</button>
      <ul>
        {user.map((e, index) => {
          return <li key={index}>{e.name}</li>;
        })}
      </ul>
    </div>
  );
}
