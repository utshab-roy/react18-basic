import './App.css'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

function App() {
  const personName = {
    first: 'Utshab',
    last: 'Roy',
  }

  const listOfPerson = [
    { first: 'Utshab', last: 'Roy' },
    { first: 'Ashik', last: 'Jhalok' },
    { first: 'Romy', last: 'Gomez' },
  ]

  return (
    <div className="App">
      <Greet name="ROY" messageCount={22} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={listOfPerson} />
      <Status status="success" />
      <Heading>Children Props Example</Heading>

      <Oscar>
        <Heading>
          This is a heading children value inside Oscar component
        </Heading>
      </Oscar>
    </div>
  )
}

export default App
