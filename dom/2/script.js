
const url = 'https://jsonplaceholder.typicode.com/todos'
async function main(){
    try {
        let response = await axios.get(url)
        // console.log(response.data)
        createTable(response.data)
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