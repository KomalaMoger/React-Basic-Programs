import React, { useState } from "react";
export default function RandomNameRemove() {
  let username = ["komala", "rovina", "sachin", "dev"];
  const [user, setUser] = useState(username);
  const [name, setName] = useState("");

  const handleClick = () => {
    const random = user[Math.round(Math.random() * user.length - 1)];
    const task = user.filter((usertask) => {
      return usertask !== random;
    });
    // console.log('jkj', task)
    setUser(task);
    setName(random);
  };
  return (
    <>
      <h2>Random name-{name}</h2>
      <h2>Users</h2>
      {user.length == 0
        ? "No more username"
        : user.map((ele, index) => {
            return <li key={index}>{ele}</li>;
          })}
      <button onClick={handleClick}>draw</button>
    </>
  );
}
