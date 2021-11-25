import * as React from "react"
import './App.css';
import { Button } from '@chakra-ui/react'
import axios from "axios"


const { useState } = React;

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn React</h1>
        <h6>{counter}</h6>
        <Button colorScheme="green" onClick={() => {
          setCounter(counter + 1)
        }}>Increment</Button>
        <Button colorScheme="blue" onClick={() => {
          fetchRandomData()
        }}>Fetch Data</Button>
      </header>
    </div>
  );
}

const fetchRandomData = () => {
  axios.get('https://randomuser.me/api')
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.error(err);
    })
}

export default App;
