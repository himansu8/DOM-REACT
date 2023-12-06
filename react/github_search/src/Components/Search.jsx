import { useState } from "react";
import Alert from "./Alert";

function Search(props) {
    const [username, setUsername] = useState("");
    function onChangeHandler(e) {
        setUsername(e.target.value);
        //console.log(username);
    }
    function onSubmitHandler(e) {
        e.preventDefault()  //to prevent refreshing the page
        props.searchUsers(username);
        setUsername("")
    }
    function onClearHandler(e) {
        e.preventDefault()
        props.clearUsers()
    }
    return (
        <>
            <center>
                <h1>Github Search</h1>
                <Alert alert={props.alert}/>
                <form>
                    <input type="text" placeholder="Enter Username" onChange={onChangeHandler} value={username} />
                    <button onClick={onSubmitHandler}>Search</button>
                    <button onClick={onClearHandler}>Clear</button>

                </form>
            </center>
        </>
    )
}
export default Search;  