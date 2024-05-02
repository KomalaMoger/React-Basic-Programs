export default function Calculate() {
  return <ChildP11 a={10} b={20} />;
}
const ChildP11 = ({ a, b }) => {
  return (
    <div className="text-success">
      {a}+{b}={a + b}
    </div>
  );
};
