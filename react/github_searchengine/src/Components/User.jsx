
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Loading from "./Loading";
import Loader from '../assets/Loader.gif'
import axios from "axios";
function User(props) {

  const { username } = useParams();
  console.log(username)

  const [profile, setProfile] = useState({})
  const [repos, setRepos] = useState([])

  useEffect(() => {
    findUserProfile(username);
    userRepos(username)
  }, [])


  function findUserProfile(user) {
    //props.setIsLoading(true)
    const url = `https://api.github.com/users/${user}`
    //setTimeout(()=>{
      axios.get(url)
      .then((res) => {
        console.log(res.data)
        setProfile(res.data)
        props.setIsLoading(false)
      })
      .catch((err) => { console.log(err) })
    //},3000)
    
  }

  function userRepos(user){
    const url=`https://api.github.com/users/${user}/repos`
    axios.get(url)
      .then((res) => {
        console.log(res.data)
        setRepos(res.data)
      })
      .catch((err) => { console.log(err) })
  }


  return (
    <div className="flexCont">
      <div className="profile">
      <img className="profilepic1" height={250} width={250} src={profile.avatar_url} />
      
      <p>Name: {profile.name}</p>
      <p>Login: {username}</p>
      <p>Followers: {profile.followers}</p>
      <p>Following: {profile.following}</p>
      </div>
      <div className="repos">
      {repos.map((ele)=>{
        return (
          <>
          <p>{ele.name}</p>
          <button><a href={ele.html_url} target="_blank">Find Repos</a></button>
          <hr/>
          </>
        )
      })}
      </div>

    </div>
  )
}
export default User