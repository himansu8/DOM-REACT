
import Search from "./Search";
import Users from "./Users";


function Home(props) {

    return (
        <>

            <Search searchUsers={props.searchUsers} />
            <hr />
            <Users users={props.users} />


        </>
    )
}
export default Home;  