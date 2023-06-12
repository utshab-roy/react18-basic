import Button from './components/Button';

function App() {
  return (
    <div>
      <Button btnType="info" onClick={() => console.log('clicked')}>
        Click me !
      </Button>
    </div>
  );
}

export default App;
