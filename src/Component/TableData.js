import userdata from "./data/commondata.json";
import Table from "react-bootstrap/Table";
export default function TableData() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>title</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {userdata.map((e) => {
          return (
            <tr>
              <td>{e.title}</td>
              <td>{e.status}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
