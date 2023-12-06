import { useState } from "react";
function Form() {
const [data, setData]=useState("")
function onChangeHandler(e){
    //console.log(e.target);
    console.log(e.target.value);
    setData(e.target.value)
}
// function onClickHandler(e){
//     console.log(e.target);
//     //console.log(e.target.value);
//     e.target.style.color = "red"
// }
function clearText(e){
    e.preventDefault()  //prevent refresinh the pages
    setData("")         // clear the existing the state
}
  return (
    <>
    <form>
        <input 
        type="text"
        placeholder="Enter Something"
        onChange={onChangeHandler}
        value={data}/>
        {/* <h1 onClick={onClickHandler}>Change Color</h1> */}
        <br />
        <button>Submit</button>
        <button onClick={clearText}>Clear</button>

    </form>
    <p>{data}</p>
    </>
  )
}

export default Form