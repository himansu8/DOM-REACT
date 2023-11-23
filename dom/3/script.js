const url = 'https://jsonplaceholder.typicode.com/users';
async function main(){
    try {
        let response = await axios.get(url)
        console.log(response.data);
        createTable(response.data);
    } 
    catch (error) {
        console.log(error)
    }
}
main();
// function createTable(data){
//     let myTable = document.querySelector('#myTable');
//     let tr = document.createElement('tr')
//     let td1 = document.createElement('td')
//     td1.innerText = data[0].id
//     let td2 = document.createElement('td')
//     td2.innerText = data[0].name
//     let td3 = document.createElement('td')
//     td3.innerText = data[0].username
//     let td4 = document.createElement('td')
//     td4.innerText = data[0].email
//     let td5 = document.createElement('td')
//     td5.innerText =  (`${data[0].address.street},${data[0].address.suite},${data[0].address.city}`)
//     let td6 = document.createElement('td')
//     td6.innerText = data[0].address.geo.lat
//     let td7 = document.createElement('td')
//     td7.innerText =data[0].address.geo.lng
//     let td8 = document.createElement('td')
//     td8.innerText = data[0].phone
//     let td9 = document.createElement('td')
//     td9.innerText = data[0].website
//     let td10 = document.createElement('td')
//     td10.innerText = (`${data[0].company.name},${data[0].company.catchPhrase},${data[0].company.bs}`)
//     tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9,td10);
//     myTable.appendChild(tr);
// }
// function createTable(data){
//         let myTable = document.querySelector('#myTable');
//         data.forEach((ele) =>{
//         let tr = document.createElement('tr')
//         let td1 = document.createElement('td')
//         td1.innerText = ele.id
//         let td2 = document.createElement('td')
//         td2.innerText = ele.name
//         let td3 = document.createElement('td')
//         td3.innerText = ele.username
//         let td4 = document.createElement('td')
//         td4.innerText = ele.email
//         let td5 = document.createElement('td')
//         td5.innerText =  (`${ele.address.street},${ele.address.suite},${ele.address.city}`)
//         let td6 = document.createElement('td')
//         td6.innerText = ele.address.geo.lat
//         let td7 = document.createElement('td')
//         td7.innerText =ele.address.geo.lng
//         let td8 = document.createElement('td')
//         td8.innerText = ele.phone
//         let td9 = document.createElement('td')
//         td9.innerText = ele.website
//         let td10 = document.createElement('td')
//         td10.innerText = (`${ele.company.name},${ele.company.catchPhrase},${ele.company.bs}`)
//         tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9,td10);
//         myTable.appendChild(tr);
//         })
        
//     }
function createTable(data){
    let myTable = document.querySelector('#myTable');
    data.forEach((ele) =>{
    let tr = document.createElement('tr');
    for(i=1;i<=10;i++){
        let td = document.createElement('td')
        if(i==1) td.innerText = ele.id
        if(i==2) td.innerText = ele.name
        if(i==3) td.innerText = ele.username
        if(i==4) td.innerText = ele.email
        if(i==5) td.innerText = (`${ele.address.street},${ele.address.suite},${ele.address.city}`)
        if(i==6) td.innerText = ele.address.geo.lat
        if(i==7) td.innerText = ele.address.geo.lng
        if(i==8) td.innerText = ele.phone
        if(i==9) td.innerText = ele.website
        if(i==10) td.innerText = (`${ele.company.name},${ele.company.catchPhrase},${ele.company.bs}`)
        tr.appendChild(td);
    }
    myTable.appendChild(tr);
    })
    
}
    