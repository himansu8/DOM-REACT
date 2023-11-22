// function Fruits(props){
//     console.log(props.f);
//     return(
//         <h1>{props.f[2]}</h1>
//     )
// }
// export default Fruits;
//-----------------------------------------------------
function Fruits(props){
    console.log(props.f);
    let a = <h1>{props.f[1]}</h1>
    return(
        <>
        {props.f.map(ele => {
            return (
                <h2>{ele}</h2>
            )
        })}
        </>
    )
}
export default Fruits;