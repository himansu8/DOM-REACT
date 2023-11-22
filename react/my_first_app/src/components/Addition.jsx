const Addition = (props) =>{
    console.log(props.a, props.b);
    return(
        <h1>Sum is {props.a + props.b}</h1>
    )
}
export default Addition;