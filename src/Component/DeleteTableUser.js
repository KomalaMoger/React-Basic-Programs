import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import userdata from "./data/userdata.json";
export default function DeleteTableUser() {
  const [users, setUsers] = useState(userdata);
  const [email, setEmail] = useState("");
  const handleEmailRemove = (e) => {
    setEmail(e.target.value);
  };
  const handleSumit = (e) => {
    e.preventDefault();
    const result = users.filter((user) => {
      return email !== user.email;
    });
    setUsers(result);
  };
  return (
    <>
      <h3 className="text-primary-emphasis">users length-{users.length}</h3>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <form onSubmit={handleSumit}>
        <h5 className="text-danger">delete user data</h5>
        <input
          type="email"
          placeholder="enter email to delete"
          value={email}
          onChange={(e) => handleEmailRemove(e)}
        />
        <input type="submit" />
      </form>
    </>
  );
}
