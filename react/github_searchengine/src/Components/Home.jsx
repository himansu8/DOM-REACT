import Search from "./Search"
import Users from "./Users"

function Home(props) {
  return (
   <>
  <Search searchUsers={props.searchUsers} clearUsers={props.clearUsers} alert={props.alert}/>
   <Users users={props.users}/>
   </>
  )
}

export default Home