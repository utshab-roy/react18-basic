import { MouseEvent } from "react";

function ListGroup() {
  const items = ["New York", "Tokyo", "Osaka", "Dhaka"];

  //event handler
  // for typeScript we need to specify the type of the event
  const handelClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={index}
            //onClick={(event) => console.log(event, item, index)}
            onClick={handelClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
