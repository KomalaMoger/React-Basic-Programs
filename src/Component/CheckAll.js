import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
export default function CheckAll() {
  const userdata = [
    { id: "1", title: "Deploy app", status: true },
    { id: "2", title: "setup database", status: false },
    { id: "3", title: "create a new app", status: true },
    { id: "4", title: "deploy app to staging", status: false },
  ];

  const [user, setUser] = useState(userdata);
  const [checkedAll, setCheckedAll] = useState(false);

  const handleCheckAll = () => {
    setCheckedAll(!checkedAll);
    checkedfuncAll();
  };
  const checkedfuncAll = () => {
    if (!checkedAll) {
      const userdata = user.map((task) => {
        if (!task.status) {
          return { ...task, status: true };
        } else {
          return { ...task };
        }
      });
      setUser(userdata);
    } else {
      const userdata = user.map((task) => {
        if (!task.status) {
          return { ...task };
        } else {
          return { ...task, status: false };
        }
      });
      setUser(userdata);
    }
  };
  const handleChecked = (taskdata) => {
    const userdata = user.map((task) => {
      if (taskdata.id == task.id) {
        return { ...task, status: !task.status };
      } else {
        return { ...task };
      }
    });
    setUser(userdata);
  };
  return (
    <>
      <h5>Mark all completed</h5>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={checkedAll}
                onChange={handleCheckAll}
              />
            </th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {user.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={ele.status}
                    onChange={() => handleChecked(ele)}
                  />
                </td>
                <td>{ele.title}</td>
                <td>{ele.status && ele.status ? "completed" : "pending"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
