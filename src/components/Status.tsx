type StatusProps = {
  status: 'loading' | 'success' | 'error'
}

const Status = ({ status }: StatusProps) => {
  let message
  if (status === 'loading') {
    message = 'loading...'
  } else if (status === 'success') {
    message = 'Data fetch successfully !'
  } else if (status === 'error') {
    message = 'Error !'
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  )
}

export default Status
