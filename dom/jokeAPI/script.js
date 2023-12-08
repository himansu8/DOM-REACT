const url = 'https://v2.jokeapi.dev/joke/Programming?type=single&amount=1'
let data;
async function main(){
    try {
        let response = await axios.get(url)
        data = response.data
        console.log(data)
        getData(data)
    } catch (error) {
        console.log(error)
    }
}
main();

let p;
function getData(data){
let div=document.querySelector('#total');
let p1=document.createElement(p)
p1.innerText=data.joke
div.appendChild(p1)
}