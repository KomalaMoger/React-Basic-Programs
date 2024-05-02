import React, { useState } from "react";
export default function ListTable() {
  const [list, setList] = useState(false);
  const [table, setTable] = useState(false);
  const user = [
    { id: 1, name: "komala", email: "komala@gmail.com" },
    { id: 2, name: "mamata", email: "mamata@gmail.com" },
    { id: 3, name: "manoj", email: "manoj@gmail.com" },
    { id: 4, name: "raj", email: "raj@gmail.com" },
  ];

  const handleChecked = () => {
    setList(true);
    setTable(false);
  };
  const handleCheckedtable = () => {
    setList(false);
    setTable(true);
  };
  return (
    <>
      <form>
        <label>list</label>
        <input type="radio" checked={list} onChange={handleChecked} />
        <label>table</label>
        <input type="radio" checked={table} onChange={handleCheckedtable} />
      </form>
      {list && (
        <ul>
          {user.map((e) => {
            return (
              <>
                <li key={e.id}>
                  {e.name},{e.email}
                </li>
              </>
            );
          })}
        </ul>
      )}
      {table && (
        <table border="2px solid red">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {user.map((e) => {
              return (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
