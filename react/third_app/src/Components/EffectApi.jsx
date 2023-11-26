import { useEffect, useState } from "react";
import axios from "axios";
let data;
function EffectAPI() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.log(response.data)
                data = response.data
                setTodos(data)
                createTable(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    // function createTable(todos){
    //         let myTable=document.querySelector('#myTable');
    //         //create tr
    //         let tr = document.createElement('tr')
    //         //create td1,td2, td3, td4
    //         let td1 = document.createElement('td')
    //         td1.innerText = todos[0].userId
    //         let td2 = document.createElement('td')
    //         td2.innerText = todos[0].id
    //         let td3 = document.createElement('td')
    //         td3.innerText = todos[0].title
    //         let td4 = document.createElement('td')
    //         td4.innerText = todos[0].completed
    //         tr.append(td1, td2, td3, td4)
    //         myTable.appendChild(tr)
    //     }
    //createTable()
    function createTable(data) {
        let myTable = document.querySelector('#myTable');
        data.forEach(ele => {
            //create tr
            let tr = document.createElement('tr')
            //create td1,td2, td3, td4
            let td1 = document.createElement('td')
            td1.innerText = ele.id
            let td2 = document.createElement('td')
            td2.innerText = ele.userId
            let td3 = document.createElement('td')
            td3.innerText = ele.title
            let td4 = document.createElement('td')
            td4.innerText = ele.completed
            tr.append(td1, td2, td3, td4)
            myTable.appendChild(tr)
        });
    }
    function filterFalse() {
        let tbody = document.querySelector('#myTable')
        tbody.replaceChildren();
        //filtering out the true values
        let filterData1 = data.filter(ele => !ele.completed)
        //rendering the html with dom
        createTable(filterData1);
    }
    function filterTrue() {
        let tbody = document.querySelector('#myTable')
        tbody.replaceChildren();
        let filterData = data.filter(ele => ele.completed)
        //rendering the html with dom
        createTable(filterData);
    }


    // function filterTodos() {
    //     let flag = false;
    //     let tbody = document.querySelector('#myTable')
    //     tbody.replaceChildren();
    //     let filterData = data.filter(ele => ele.completed == flag)
    //     flag = !flag
    //     //rendering the html with dom
    //     createTable(filterData);
    // }

    return (
        <>
            <center>
                <button onClick={filterFalse}>Filter False</button>
                <button onClick={filterTrue}>Filter True</button>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>user ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody id="myTable">
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