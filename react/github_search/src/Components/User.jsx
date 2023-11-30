import { useParams } from "react-router-dom";



function User(){
    const urldata = useParams();
    //console.log(urldata)
    return(
        <h1>{urldata.uname}</h1>
    )
}
export default User;