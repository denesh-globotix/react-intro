import React from "react"
import './App.css';

const {useState} = React;

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
          <h1>Learn React</h1>
          <p>{counter}</p>
          <button onClick={() => {
            setCounter(counter+1)
          }}>Increment</button>
      </header>
    </div>
  );
}

export default App;
