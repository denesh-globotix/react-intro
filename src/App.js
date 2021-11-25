import * as React from "react"
import './App.css';
import { Button } from '@chakra-ui/react'
import axios from "axios"

const { useEffect, useState } = React;

function App() {
  const [counter, setCounter] = useState(0);
  const [userInfo, setuserInfo] = useState([{name: {first: "hello", last: "bye"}, picture: {thumnail: "no"}}]);
  const [nextPageNumber, setnextPageNumber] = useState(1);
  const [randomUserData, setrandomUserData] = useState('');

  const fetchNextData = () => {
    fetchRandomData(nextPageNumber).then((randomData) => {
      setrandomUserData(JSON.stringify(randomData, null, 2) || "no data");
      const newUserInfos = [
        ...userInfo,
        ...randomData.results
      ]
      console.log(newUserInfos)
      setuserInfo(randomData.results);
      setnextPageNumber(randomData.info.page + 1);
    })  
  } 

  // mimics componentdidmount 
  useEffect(() => {
    fetchRandomData(nextPageNumber)
      .then((randomData) => {
        setrandomUserData(JSON.stringify(randomData) || 'no user data');
        setuserInfo(randomData.results)
        setnextPageNumber(randomData.info.page + 1)
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
        <Button colorScheme="blue" onClick={() => {
          fetchRandomData()
        }}>Add User</Button>
        {JSON.stringify(getFullUserName(userInfo[0]))}
        <img src={userInfo[0].picture.thumbnail} />
      </header>
    </div>
  );
}

const getFullUserName = (userInfo) => {
  return `${userInfo.name.first} ${userInfo.name.last}`;
}

const fetchRandomData = async (PageNumber) => {
  return axios.get(`https://randomuser.me/api?page=${PageNumber}`)
    .then(({ data }) => {
      return (data);
    })
    .catch(err => {
      console.error(err, null, 2);
    })
}

export default App;