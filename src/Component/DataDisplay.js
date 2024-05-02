import userdata from "./data/commondata.json";
export default function DataDisplay() {
  return (
    <>
      <ul>
        {userdata.map((e, index) => {
          return e.status ? (
            <li style={{ color: "green" }} key={index}>
              {e.id},{e.title},{e.status}
            </li>
          ) : (
            <li style={{ color: "red" }} key={index}>
              {e.id},{e.title},{e.status}
            </li>
          );
        })}
      </ul>
    </>
  );
}
