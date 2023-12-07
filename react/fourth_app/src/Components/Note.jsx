
function Note(props) {
    return (
        <>
            <div id="big">
                <div id="titleBox"><h4>TITLE : {props.title}</h4></div>
                <div id="contentBox"><p>CONTENT: {props.content}</p></div>
            </div>
        </>

    )
}

export default Note