import './App.css';
import Github from './Components/Github';
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";



function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //fetchUsersData();
  }, [])
  function fetchUsersData(){
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
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/javascript" element={<h1>javascript</h1>} />
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
