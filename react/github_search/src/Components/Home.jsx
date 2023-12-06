
import Search from "./Search";
import Users from "./Users";


function Home(props) {

    return (
        <>

            <Search searchUsers={props.searchUsers} clearUsers={props.clearUsers} showAlert={props.showAlert} alert={props.alert}/>
            <hr />
            <Users users={props.users} />


        </>
    )
}
export default Home;  