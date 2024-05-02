import Table from "react-bootstrap/Table";
export default function GrandTotal() {
  const Lineitems = [
    { id: 1, name: "KL", price: 150, Quantity: 2 },
    { id: 2, name: "TN", price: 250, Quantity: 1 },
  ];
  let Grandtotal = 0;
  Lineitems.map((items) => {
    return (Grandtotal += items.price * items.Quantity);
  });

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>Quantity</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          {Lineitems.map((ele) => {
            return (
              <tr>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.price}</td>
                <td>{ele.Quantity}</td>
                <td>{ele.price * ele.Quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <h5>Grandtotal-{Grandtotal}</h5>
    </>
  );
}
