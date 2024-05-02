import React, { useState } from "react";
import { Button } from "react-bootstrap";
import userdata from "./data/commondata.json";
export default function AddRemoveUpdateUser() {
  const [user, setUser] = useState(userdata);
  const [addtask, setAddtask] = useState("");

  let data;
  const handleRemove = (selected) => {
    const confirmremove = window.confirm(
      `are u sure u want to remove ${selected.title}`
    );
    if (confirmremove) {
      user.map((task) => {
        if (selected.id === task.id) {
          data = user.filter((ele) => {
            return ele.id !== selected.id;
          });
        }
        setUser(data);
      });
    }
  };
  const handleChange = (selected) => {
    const confirmremove = window.confirm(
      `are u sure u want to update ${selected.title}`
    );
    if (confirmremove) {
      const usedata = user.map((task) => {
        if (selected.id === task.id) {
          // return Object.assign({}, task, { status: !task.status })
          return { ...task, status: !task.status };
        } else {
          // return Object.assign({}, task)
          return { ...task };
        }
      });
      setUser(usedata);
    }
  };
  const handleInputChange = (e) => {
    setAddtask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: Number(new Date()),
      title: addtask,
      status: false,
    };
    setUser([...user, formData]);
  };
  return (
    <>
      <h6>listing of user-{user.length}</h6>
      <ul>
        {user.map((ele) => {
          return (
            <li>
              {ele.status ? (
                <del style={{ color: "green" }}>{ele.title}</del>
              ) : (
                <span style={{ color: "red" }}>{ele.title}</span>
              )}
              <Button onClick={() => handleRemove(ele)}>Remove</Button>
              <Button
                onClick={() => handleChange(ele)}
                variant="outline-primary"
              >
                Update
              </Button>
            </li>
          );
        })}
      </ul>
      <h6>add task</h6>
      <form onSubmit={handleSubmit}>
        <label>add task</label>
        <input
          type="text"
          value={addtask}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <input type="submit" />
      </form>
    </>
  );
}
