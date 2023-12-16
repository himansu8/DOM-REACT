import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import User from './Components/User';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([])
  const [alert, setAlert] = useState(null);
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    fetchUsers()
  }, [])


  function fetchUsers() {
    setIsLoading(true);

    const url = 'https://api.github.com/users'

    setTimeout(() => {
      axios.get(url)
        .then((res) => {
          //console.log(res.data)
          setUsers(res.data)
          setIsLoading(false)
        })
        .catch((err) => { console.log(err) })
    }, 3000)

  }

  function showAlert(payload) {
    setAlert(payload);
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  function searchUsers(username) {
    if (username.trim().length == 0) {
      //alert("Please Enter Valid User Name")
      showAlert({ type: "error", msg: "Please Enter Valid User Name" });
      return;
    }
    const url = `https://api.github.com/search/users?q=${username}`
    axios.get(url)
      .then((res) => {
        console.log(res.data.items)
        setUsers(res.data.items)
      })
      .catch((err) => { console.log(err) })

  }

  function clearUsers() {
    setUsers([])
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Home users={users} searchUsers={searchUsers} clearUsers={clearUsers} alert={alert} isLoading={isLoading} />} />
        <Route path='/user/:username' element={<User />} isLoading={isLoading} setIsLoading={setIsLoading} />


      </Routes>
    </>
  );
}

export default App;
