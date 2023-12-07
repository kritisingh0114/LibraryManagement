import { useEffect, useState } from 'react';
import './App.css';
import { Container } from './components/container/Container';
import Navbar from './components/navbar/Navbar';
import books from "./testbookdata.json";
import users from "./testuserdata.json";
import { Book } from './types/Book';
import { ContentType } from './types/ContentType';
import { User } from './types/User';

function App() {

  const [data, setData] = useState([{}])
  const [sideNavbarOpen, setSideNavbarOpen] = useState(false)

  const toggleSideNavbar = () => {
    setSideNavbarOpen(!sideNavbarOpen);
  }
  
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
    <div className='flex'>
      <Navbar toggleSideNavbar={toggleSideNavbar} sideNavbarOpen={sideNavbarOpen}/>
      <div className={`flex-1 transition-all duration-300 ${sideNavbarOpen ? 'ml-48' : 'ml-20'}`}>
        <Container items={books as Book[]} contentType={ContentType.BOOK}/>
        <Container items={users as User[]} contentType={ContentType.USER}/> 
      </div>
    </div>
  );
}

export default App;
