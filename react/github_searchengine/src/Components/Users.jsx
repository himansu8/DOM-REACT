
import { Link } from "react-router-dom"
function Users(props) {
    console.log(props.users)
    return (
        <>
            <center>
                {props.users.map((ele, index) => {
                    return (
                        <div key={index}>
                            <div className="flexCont" >
                                <div className="profilepic">
                                    <img className="profilepic" height={100} width={100} src={ele.avatar_url} />

                                </div>
                                <div className="bio">
                                    <h4>{ele.login}</h4>
                                    <Link to={`/user/${ele.login}`}>Profile</Link>
                                </div>
                            </div>
                        <hr/>
                        </div>


                    )
                })}
            </center>
        </>
    )
}

export default Users