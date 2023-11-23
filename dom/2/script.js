
const url = 'https://jsonplaceholder.typicode.com/todos'
let data;
async function main(){
    try {
        let response = await axios.get(url)
        data = response.data
        // console.log(response.data)
        createTable(data)
    } catch (error) {
        console.log(error)
    }
}
main();

// function createTable(data){
//     let myTable=document.querySelector('#myTable');
//     //create tr
//     let tr = document.createElement('tr')
//     //create td1,td2, td3, td4
//     let td1 = document.createElement('td')
//     td1.innerText = data[0].userId
//     let td2 = document.createElement('td')
//     td2.innerText = data[0].id
//     let td3 = document.createElement('td')
//     td3.innerText = data[0].title
//     let td4 = document.createElement('td')
//     td4.innerText = data[0].completed
//     tr.append(td1, td2, td3, td4)
//     myTable.appendChild(tr)
// }
// createTable()


function createTable(data){
    let myTable=document.querySelector('#myTable');
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
//createTable()

// let btn0 = document.querySelector('#btn0');
// let flag = false;
// btn0.addEventListener('click', ()=>{
//     //removing children of body
//     let tbody = document.querySelector('#myTable')
//     tbody.replaceChildren();
//     //filtering out the true values
//     let filterData = data.filter(ele => ele.completed == flag)
//     flag = !flag
//     //rendering the html with dom
//     createTable(filterData);
// })
let btn = document.querySelector('#btn');
btn.addEventListener('click', ()=>{
    //removing children of body
    let tbody = document.querySelector('#myTable')
    tbody.replaceChildren();
    //filtering out the true values
    let filterData = data.filter(ele => ele.completed)
    //rendering the html with dom
    createTable(filterData);
})
let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', ()=>{
    //removing children of body
    let tbody = document.querySelector('#myTable')
    tbody.replaceChildren();
    //filtering out the true values
    let filterData1 = data.filter(ele => !ele.completed)
    //rendering the html with dom
    createTable(filterData1);
})