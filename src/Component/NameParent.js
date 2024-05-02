export default function NameParent() {
  return (
    <>
      <Childp8 name="komala" />
      <Childp8 name="mamata" />
    </>
  );
}
const Childp8 = ({ name = "" }) => {
  return <h1 className="text-primary">hello-{name}</h1>;
};
