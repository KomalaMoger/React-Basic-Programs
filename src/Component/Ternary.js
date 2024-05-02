export default function Ternary() {
  const random = Math.round(Math.random() * 10);
  return (
    <div>
      {random}-
      {random % 2 == 0 ? (
        <h1 style={{ color: "red" }}>even</h1>
      ) : (
        <h1 style={{ color: "green" }}>odd</h1>
      )}
    </div>
  );
}
