import React, { useState } from "react";
import { Button } from "react-bootstrap";
import userdata from "./data/commondata.json";
export default function RemoveAddName() {
  const [data, setData] = useState(userdata);
  const [titleInput, setTitleInput] = useState("");
  let datauser;

  const handleClick = (task) => {
    const confirmremove = window.confirm(
      `ARE SURE YOU WANT TO REMOVE ${task.title}?`
    );
    if (confirmremove) {
      data.map((ele) => {
        if (ele.id == task.id) {
          datauser = data.filter((data) => {
            return data.id !== task.id;
          });
        }
        setData(datauser);
      });
    }
  };
  const handleInputChange = (e) => {
    setTitleInput(e.target.value);
  };

  const handleSubmitChange = (e) => {
    e.preventDefault();
    const formData = {
      id: Number(new Date()),
      title: titleInput,
      status: false,
    };
    setData([...data, formData]);
  };

  console.log("data", data);
  return (
    <>
      <ul>
        {data.map((task) => {
          return (
            <li key={task.id}>
              {task.title}
              <Button
                onClick={() => {
                  handleClick(task);
                }}
              >
                remove
              </Button>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmitChange}>
        <label>add task</label>
        <input
          type="text"
          placeholder="Enter  title"
          value={titleInput}
          onChange={(e) => handleInputChange(e)}
        />
        <input type="submit" />
      </form>
    </>
  );
}
