import { useState } from "react";
function CounterState(){
    const [counter ,  setCounter] = useState(0);
    function handleIncrement(){
       setCounter(counter + 1);
        console.log(setCounter);
    }
    function handleDecrement(){
        setCounter(counter - 1);
         console.log(counter);
     }
    return (
        <>
        <h1>Counter with State</h1>
        <p>Count : {counter}</p>
        <button onClick = {handleIncrement}>Increment</button>
        <button onClick = {handleDecrement}>Decrement</button>

        </>
    )
}
export default CounterState;