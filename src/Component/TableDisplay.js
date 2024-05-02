import React, { useState } from "react";
import userdata from "./data/commondata.json";
import Table from "react-bootstrap/Table";
export default function TableDisplay() {
  const [user, setUser] = useState(userdata);
  const handleCheckbox = (e) => {
    user.map((ele) => {
      if (e.id === ele.id) {
        return { ele, status: !ele.status };
      }
      return { ele };
    });
  };
  console.log("user", user);
  return (
    <Table striped bordered hover size="sm" responsive="sm">
      <thead>
        <tr>
          <th>checbox</th>
          <th>name</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {user.map((e) => {
          return (
            <tr>
              <td>
                <input
                  type="checkbox"
                  checked={e.status}
                  onChange={handleCheckbox(e)}
                />
              </td>
              <td>{e.title}</td>
              <td>{e.status ? "completed" : "pending"}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
