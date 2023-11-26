function CounterVar(){
    let counter=0;
    function handleIncrement(){
        counter += 1;
        console.log(counter);
    }
    return (
        <>
        <h1>Counter with normal variable</h1>
        <p>Count : {counter}</p>
        <button onClick = {handleIncrement}>Increment</button>
        </>
    )
}
export default CounterVar;