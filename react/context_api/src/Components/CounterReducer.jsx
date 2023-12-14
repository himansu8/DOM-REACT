import { useReducer } from "react"
import reducer from "../Reducer";

function CounterReducer() {
    const initialState = {
        counter: 0,
        name: ""
    };

    //reducer function 
    
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div>CounterReducer</div>
            <h3>Counter reducer: {state.counter}</h3>
            <h3>Name: {state.name}</h3>

            <button onClick={() => dispatch({ type: "inc" })}>inc</button>
            <button onClick={() => dispatch({ type: "dec" })}>dec</button>

        </>

    )
}

export default CounterReducer