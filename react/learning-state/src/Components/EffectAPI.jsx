import { useEffect, useState } from "react";
import axios from "axios";
function EffectAPI(){

const url = 'https://jsonplaceholder.typicode.com/users'
const [users, setUsers] = useState([]);
useEffect(()=>{
console.log("API Call")
axios.get(url)
.then((response)=>{
    console.log(response.data)
    setUsers(response.data)
})
.catch((err)=>{
    console.log(err)
})
},[])

    return(
        <>
        {users.map(ele=>{
            return(
                <>
                <p>name : {ele.name}</p>
                <p>username : {ele.username}</p>
                <p>email : {ele.email}</p>
                <hr/>
                </>

            )
        })}
        </>
    )
}
export default EffectAPI;