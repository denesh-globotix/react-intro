import * as React from "react"
import './App.css';
import { Button } from '@chakra-ui/react'
import axios from "axios"

const { useEffect, useState } = React;

function App() {
  const [counter, setCounter] = useState(0);
  const [userInfo, setuserInfo] = useState([]);
  const [randomUserData, setrandomUserData] = useState('');

  // mimics componentdidmount 
  useEffect(() => {
    fetchRandomData()
      .then((randomData) => {
        setrandomUserData(JSON.stringify(randomData) || 'no user data');
        setuserInfo(randomData.results)
        console.log(randomData.results[0])
        console.log(randomData.results[0].name)
        console.log(userInfo[0].name.first)
      });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn React</h1>
        <h6>{counter}</h6>
        <Button colorScheme="green" onClick={() => {
          setCounter(counter + 1)
        }}>Increment</Button>
          {JSON.stringify(getFullUserName(userInfo[0]))}
        {/* <pre>{randomUserData}</pre> */}
        <img src={userInfo[0].picture.large}/>
      </header>
    </div>
  );
}

const getFullUserName = (userInfo) => {
  console.log(userInfo)
  const {name} = userInfo;
  const {first, last} = name;
  return `${name.first} ${name.last}`;
}

const fetchRandomData = async () => {
  return axios.get('https://randomuser.me/api')
    .then(({ data }) => {
      return (data);
    })
    .catch(err => {
      console.error(err, null, 2);
    })
}

export default App;
