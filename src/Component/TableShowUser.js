import React, { useState } from "react";
import { Button } from "react-bootstrap";
export default function TableShowUser() {
  let users = [
    { id: 1, name: "komala", email: "komalamoger@gmail.com" },
    { id: 2, name: "mamata", email: "mamatamoger@gmail.com" },
    { id: 3, name: "manoj", email: "manojmoger@gmail.com" },
    { id: 4, name: "laxmi", email: "laxmimoger@gmail.com" },
  ];
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>show</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      alert(`${user.email}`);
                    }}
                  >
                    show
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
