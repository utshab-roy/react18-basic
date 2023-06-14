type OscarProps = {
  children: React.ReactNode // by using this we can use component as child component
}

const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>
}

export default Oscar
