let h1 = document.querySelector('h1');
h1.addEventListener('click',(e)=>{
    // console.log(e)
    console.log(e.target)
    e.target.style.color='red'
    e.target.innerText="JINU"
    //console.log("h1 has been clicked")
})
let input = document.querySelector('input');
input.addEventListener('change',(e)=>{
    console.log(e.target.value);
})