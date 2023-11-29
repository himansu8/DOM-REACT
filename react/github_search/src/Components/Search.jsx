import { useState } from "react";

function Search(props) {
   const [username, setUsername] = useState("");
   
    return (
        <>
            <h1>Github Search</h1>
            <form>
                <input type="text" placeholder="Enter Username" />
                <button>Search</button>
                <button>Clear</button>

            </form>
        </>
    )
}
export default Search;  