import { useState } from "react";

function ListGroup() {
  const items = ["New York", "Tokyo", "Osaka", "Dhaka"];

  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Lists</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            //onClick={(event) => console.log(event)}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
