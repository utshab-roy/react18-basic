type ButtonProps = {
  // hard to remember
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={(event) => handleClick(event, 1)}>Click me !</button>
}

export default Button
