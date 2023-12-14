import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { AuthContext,IAuthContext } from './context/auth';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BookListPage } from './pages/BooksListPage';
import { ProfilePage } from './pages/ProfilePage';
import { LoginPage } from './pages/LoginPage';
import { UserListPage } from './pages/UserListPage';

// Main App We run for frontend
function App() {

  const [data, setData] = useState([{}])
  const [sideNavbarOpen, setSideNavbarOpen] = useState(true)

  const toggleSideNavbar = () => {
    setSideNavbarOpen(!sideNavbarOpen);
  }
  const [authState, _] = useState<IAuthContext>({
    isLibrarian:sessionStorage.login!=null,
    userId:sessionStorage.userId
  });
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
    <AuthContext.Provider value={authState}>

    <div className='flex root'>
      <Navbar toggleSideNavbar={toggleSideNavbar} sideNavbarOpen={sideNavbarOpen}/>

      <div className='page'>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route> 
        <Route path='/books' element={<BookListPage/>}></Route> 
        <Route path='/users' element={<UserListPage/>}></Route> 
        <Route path='/login' element={<LoginPage/>}></Route> 
        <Route path='/profile/:userId' element={<ProfilePage/>}></Route> 
      </Routes>
      </div>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
