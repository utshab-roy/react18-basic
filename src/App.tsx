import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Tokyo", "Osaka", "Dhaka", "Jessore"];

  return (
    <div>
      <ListGroup items={items} heading="Citis" />
    </div>
  );
}

export default App;
