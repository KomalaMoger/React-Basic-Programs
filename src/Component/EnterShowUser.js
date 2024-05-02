import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
export default function EnterShowUser() {
  let data = [
    { id: 1, name: "komala", email: "komala@gmail.com" },
    { id: 2, name: "mamata", email: "mamata@gmail.com" },
    { id: 3, name: "manoj", email: "manoj@gmail.com" },
    { id: 4, name: "laxmi", email: "mamata@gmail.com" },
  ];
  const [users, setUser] = useState(data);
  const handleRemove = (user) => {
    let input = prompt("enter name");
    const result = users.filter((data) => data.name !== input);
    // if(user.name===input){
    //     setUser(result)
    // }
    // else{
    //     alert('invalid name')
    // }
    user.name === input ? setUser(result) : alert("invalid name");
  };
  return (
    <>
      <h5>user length-{users.length}</h5>
      <Table striped bordered hover size="sm">
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
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      handleRemove(user);
                    }}
                  >
                    show
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
