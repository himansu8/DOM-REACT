import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import User from './Components/User';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([])
  const [alert, setAlert] = useState(null);


  useEffect(() => {
    fetchUsers()
  }, [])


  function fetchUsers() {
    const url = 'https://api.github.com/users'
    axios.get(url)
      .then((res) => {
        //console.log(res.data)
        setUsers(res.data)
      })
      .catch((err) => { console.log(err) })
  }

  function showAlert(payload){
    setAlert(payload);
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }

  function searchUsers(username) {
    if (username.trim().length == 0) {
      //alert("Please Enter Valid User Name")
      showAlert({type:"error", msg:"Please Enter Valid User Name"});
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
        <Route path='/' element={<Home users={users} searchUsers={searchUsers} clearUsers={clearUsers} alert={alert} />} />
        <Route path='/user' element={<User />} />

      </Routes>
    </>
  );
}

export default App;
