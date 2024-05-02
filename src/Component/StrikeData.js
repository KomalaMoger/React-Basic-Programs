import userdata from "./data/commondata.json";
export default function StrikeData() {
  return (
    <>
      <ul>
        {userdata.map((e, index) => {
          return (
            <li key={index}>
              {e.status ? (
                <del style={{ color: "red" }}>{e.title}</del>
              ) : (
                <span style={{ color: "green" }}>{e.title}</span>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
