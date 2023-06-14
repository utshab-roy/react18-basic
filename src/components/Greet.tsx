// giving type to the props
type GreetType = {
  name: string
  messageCount?: number
  isLoggedIn: boolean
}

const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetType) => {
  return (
    <div>
      {isLoggedIn ? <h2>Hello, {name}</h2> : <h2>Hello, Guest</h2>}

      <p>Number of message : {messageCount}</p>
      <p>User logged in: {isLoggedIn}</p>

      <h4>List of Persons:</h4>
    </div>
  )
}

export default Greet
