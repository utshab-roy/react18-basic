type PersonListProps = {
  names: {
    first: string
    last: string
  }[] // by this line we are indicating that it is a array of names
}
const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h4>Names List:</h4>
      <ul>
        {props.names.map((name) => {
          return (
            <li key={name.first}>
              {name.first} {name.last}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PersonList
