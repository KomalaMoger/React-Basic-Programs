export default function EvenOdd() {
  return <Childp9 num={[2, 4, 5, 9]} />;
}
const Childp9 = ({ num }) => {
  return (
    <ul className="text-secondary">
      {num.map((e, index) => {
        return (
          <li key={index}>
            {e}-{e % 2 == 0 ? "even" : "odd"}
          </li>
        );
      })}
    </ul>
  );
};
