import React, { useState } from "react";
import { Button } from "react-bootstrap";
import userdata from "./data/commondata.json";
export default function AddRemoveCheck() {
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
  const handleChecked = (selected) => {
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
      <h3>listing length of user-{user.length}</h3>
      <ul>
        {user.map((data) => {
          return (
            <li>
              {data.status ? (
                <del style={{ color: "green" }}>{data.title}</del>
              ) : (
                <span style={{ color: "red" }}>{data.title}</span>
              )}
              <input
                type="checkbox"
                checked={data.status}
                onChange={() => {
                  handleChecked(data);
                }}
              />
              <Button
                variant="outline-primary"
                onClick={() => {
                  handleRemove(data);
                }}
              >
                remove
              </Button>
            </li>
          );
        })}
      </ul>
      <h3>add task</h3>
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
