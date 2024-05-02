export default function DisplayEven() {
  return <Childp10 num={[10, 7, 3, 9, 8]} />;
}
const Childp10 = ({ num }) => {
  return (
    <ul className="text-primary">
      {num
        .filter((e) => e % 2 == 0)
        .map((ele, index) => {
          return <li key={index}>{ele}</li>;
        })}
    </ul>
  );
};
