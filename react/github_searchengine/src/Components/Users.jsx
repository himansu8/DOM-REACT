

function Users(props) {
    console.log(props.users)
    return (
        <>
            <center>
                {props.users.map((ele, index) => {
                    return (
                        <div key={index}>

                            <h4>{ele.login}</h4>
                            <p>{ele.html_url}</p>
                            <hr />

                        </div>
                    )
                })}
            </center>
        </>
    )
}

export default Users