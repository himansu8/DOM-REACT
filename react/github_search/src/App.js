import './App.css';
import Home from './Components/Home';
import User from './Components/User';
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";



function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsersData();
  }, [])
  function fetchUsersData() {
    const url = "https://api.github.com/users";
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);

      })
      .catch((err) => {
        console.log(err);
      })
  }
  function searchUsers(username) {
    const url = `https://api.github.com/search/users?q=${username}`
    axios.get(url)
      .then((response) => {
        //console.log(response.data)
        setUsers(response.data.items);
      })
      .catch((error) => { console.log(error) })
  }
  function clearUsers(){
    setUsers([])
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home users={users} searchUsers={searchUsers} clearUsers={clearUsers} />} />
        <Route path="/user/:uname" element={<User />} />
      </Routes>


      {/* <h1>search</h1>
      {users.map(ele =>{
        return(
          
          <>
          <h5>{ele.login}</h5>
          <a href = {ele.html_url} target = "_blank">profile</a>
          <hr/>
          </>
        )
      })} */}
    </>
  );
}

export default App;
