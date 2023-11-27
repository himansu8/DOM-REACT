import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

function FetchGithub(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const url = "https://api.github.com/users";
        axios.get(url)
        .then((response)=>{
            console.log(response.data);
            setUsers(response.data); 
            
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])
    return(
        <>
        {/* {users.map(ele =>{
            return (
                <>
                <p>login : {ele.login}</p>
                <a href={ele.html_url}>html</a>
                <hr/>
                </>
            )
        })} */}

        <Routes>
            <Route path="/" element={<h1>home</h1>} />
            <Route path="/javascript" element={<h1>javascript</h1>} />
        </Routes>
        </>
    )
}
export default FetchGithub;