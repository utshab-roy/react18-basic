import React, { useState } from 'react'

type InputProps = {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = (props: InputProps) => {
  const [name, setName] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    console.log(name)
  }

  return <input type="text" value={name} onChange={handleInputChange} />
}

export default Input
