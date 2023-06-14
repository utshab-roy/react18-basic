import './App.css'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  return (
    <div className="App">
      <Button
        handleClick={(event, id) => {
          console.log('btn clicked', event, id)
        }}
      />
      <Input value="Hi" handleChange={(e) => {}} />
    </div>
  )
}

export default App
