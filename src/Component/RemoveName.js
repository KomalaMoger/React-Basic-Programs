import React, { useState } from "react";
import { Button } from "react-bootstrap";
export default function RemoveName() {
  const user = [
    { id: 1, name: "komala", email: "komala@gmail.com" },
    { id: 2, name: "mamata", email: "mamata@gmail.com" },
    { id: 3, name: "manoj", email: "manoj@gmail.com" },
    { id: 4, name: "raj", email: "raj@gmail.com" },
  ];
  const [data, setData] = useState(user);

  const handleClick = (selected) => {
    const confirmremove = window.confirm(
      `are sure you want to remove ${selected.name}`
    );
    if (confirmremove) {
      let useradata;
      data?.map((ele) => {
        if (ele.id === selected.id) {
          useradata = data.filter((e) => {
            return e.id !== ele.id;
          });
        }
      });
      setData(useradata);
    }
  };
  return (
    <div>
      <ul>
        {data.map((ele) => {
          return (
            <li key={ele.id}>
              {ele.email}
              <Button onClick={() => handleClick(ele)}>remove</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
