export default function MsgLowerCase() {
  const msg = "komala";
  return (
    <div>
      <h1 className="text-primary">
        {msg.toLowerCase()}-{2 + 2}
      </h1>
    </div>
  );
}
