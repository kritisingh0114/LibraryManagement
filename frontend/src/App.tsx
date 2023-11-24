import React, { useState, useEffect} from 'react';
import './App.css';
import { Container } from './components/container/Container';
import { Book } from './types/Book';
import books from "./testbookdata.json"
import users from "./testuserdata.json"
import { User } from './types/User';

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/testing").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log("test")
        console.log(data)
        console.log("test")
      }
    )
  }, [])

  return (
    <div>
      <Container items={books as Book[]} contentType={"book"}/>
      <Container items={users as User[]} contentType={"user"}/>

    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
