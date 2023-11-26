import { useEffect, useState } from "react";
function Effect(){
    const [counter, setCounter] = useState(0)
    useEffect(()=>{
        console.log("Hello from effect")
    },[counter])
    return (
        <>
        <p>Counter : {counter}</p>
        <button onClick = {()=>setCounter(counter+1)}>Increment</button>
        </>
    )
}
export default Effect;