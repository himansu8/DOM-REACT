
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
function User() {

  const { username } = useParams();
  console.log(username)

  const [profile, setProfile] = useState({})
  const [repos, setRepos] = useState([])

  useEffect(() => {
    findUserProfile(username);
    userRepos(username)
  }, [])


  function findUserProfile(user) {
    const url = `https://api.github.com/users/${user}`
    axios.get(url)
      .then((res) => {
        console.log(res.data)
        setProfile(res.data)
      })
      .catch((err) => { console.log(err) })
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
      <img className="profilepic" height={250} width={250} src={profile.avatar_url} />
      <p>name: {profile.name}</p>
      <p>login: {username}</p>
      <p>followers: {profile.followers}</p>
      <p>following: {profile.following}</p>
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