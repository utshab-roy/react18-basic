import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Tokyo", "Osaka", "Dhaka", "Jessore"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Citis"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
