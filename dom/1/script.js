function changeColor(){
    let heading = document.querySelector('#heading')
    heading.style.color = 'red'
}
function changeNumber(){
    let p = document.querySelector('.count')
 p.innerText=Number(p.innerText) + 1
}
function addHtml(){
    let h2= document.querySelector('.name')
    let h5= document.createElement('h5')
    h5.innerText ='created by js';
    h2.appendChild(h5);
    // for multipple child use only append
}