import { useState } from "react"


function Counter() {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('')
    function onClickhandler(){
        setCounter(counter+1);
        setName('Himansu')
    }
  return (
    <>
    <div>simple counter</div>
    <h3>Counter:{counter}</h3>
    <h3>Name:{name}</h3>
    <button onClick={onClickhandler}>inc</button>
    <button onClick={()=>setCounter(counter-1)}>dec</button>

    <hr/>
    </>
   

  )
}

export default Counter