import { Row, Col, Button } from "react-bootstrap";
export default function AlertBtn() {
  const user = [
    { id: 1, name: "komala", email: "komala@gmail.com" },
    { id: 2, name: "mamata", email: "mamat@gmail.com" },
  ];
  return (
    <ul>
      {user.map((ele, index) => {
        return (
          <div>
            <li key={index}>
              {ele.name}{" "}
              <Button variant="primary" onClick={() => alert(`${ele.email}`)}>
                submit
              </Button>
            </li>
          </div>
        );
      })}
    </ul>
  );
}
