import { useEffect, useState } from "react";
import axios from "axios";
import '../App.css'
let data;
function EffectAPI() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const [todos, setTodos] = useState([])
    const [flag, setFlag] = useState(false)
    const [filteredTodos, setFilteredTodos] = useState([])
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.log(response.data)
                data = response.data
                setTodos(data)
                setFilteredTodos(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    function getFilterData(){
        setFlag(!flag)
        const filteredTodos = todos.filter(ele => ele.completed == flag)
        setFilteredTodos(filteredTodos);
    }
    return (
        <>
            <center>
                <button onClick={getFilterData}>Filter</button>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>user ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTodos.map(todo =>{
                            return(
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.userId}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed ? "true" : "false"}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </center>
            {/* {todos.map(ele=>{
        return (
            <>
            <p>title : {ele.title}</p>
            </>
        )
       })} */}
        </>
    )
}
export default EffectAPI;