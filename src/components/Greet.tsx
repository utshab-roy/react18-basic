// giving type to the props
type GreetType = {
  name: string;
};

const Greet = (props: GreetType) => {
  return (
    <div>
      <h2>Hello, {[props.name]}</h2>
    </div>
  );
};

export default Greet;
