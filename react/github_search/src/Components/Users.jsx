import { Link } from "react-router-dom";

function Users(props) {

    return (
        <>
            <center>
                {props.users.map(ele => {
                    return (
                        <>
                            <p>{ele.login}</p>
                            <a href={ele.html_url} target="_blank">Profile</a>
                            <Link to={`/user/${ele.login}`}>Profile</Link>
                            <hr />
                        </>
                    )
                })}
            </center>
        </>  

    )
}
export default Users; 