import * as React from "react"
import './App.css';
import {Button, ButtonGroup} from '@chakra-ui/react'


const {useState} = React;

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
          <h1>Learn React</h1>
          <p>{counter}</p>
          <Button colorScheme="green" onClick={() => {
            setCounter(counter+1)
          }}>Increment</Button>
      </header>
    </div>
  );
}

export default App;
