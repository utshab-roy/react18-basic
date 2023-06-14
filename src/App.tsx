import "./App.css"
import Greet from "./components/Greet"
import Person from "./components/Person"
import PersonList from "./components/PersonList"

function App() {
  const personName = {
    first: "Utshab",
    last: "Roy",
  }

  const listOfPerson = [
    { first: "Utshab", last: "Roy" },
    { first: "Ashik", last: "Jhalok" },
    { first: "Roy", last: "Gomez" },
  ]

  return (
    <div className="App">
      <Greet name="ROY" messageCount={22} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={listOfPerson} />
    </div>
  )
}

export default App
