export default function CityParent() {
  return <ChildP13 name="komala" city="bangalore" />;
}
const ChildP13 = ({ name = "", city = "" }) => {
  return (
    <h1 className="text-primary">
      h1-{name},{city}
    </h1>
  );
};
