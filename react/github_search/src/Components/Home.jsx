

function Home(props){

    return(
        <>
        <center>
        {props.users.map(ele=>{
            return(
                <>
                <p>{ele.login}</p>
                <a href={ele.html_url} target="_blank">Profile</a>
                <hr />
                </>
            )
        })}
        </center>
        </>
    )
}
export default Home;