/*
    10 tr => 10 td
*/

let score = 0;
let name = prompt('Enter your name');
let clickAudio = new Audio('./assets/click.wav')
let clickAudio1 = new Audio('./assets/lose.wav')

document.querySelector('#name').innerText = name;
let levelNumber;

function main(level){

    if(level == 'easy')  levelNumber = 10
    else if(level == 'medium')  levelNumber = 30
    else if(level == 'hard')  levelNumber = 50

    let myTable = document.querySelector('#myTable');
    myTable.replaceChildren();

    let counter = 0;

    const arr = new Array(levelNumber * levelNumber);
    for(let i=0; i<100; i++) arr[i] = i+1;

    arr.sort((a,b)=> Math.random() - 0.5);

    //create table logic
    for(let i=1; i<=levelNumber; i++){ //10 rows tr
        let tr = document.createElement('tr'); 

        for(let i=1; i<=levelNumber; i++){ //10 columns td
            let td = document.createElement('td');
            td.innerText = arr[counter];
            td.setAttribute('id', arr[counter]);
            counter++;
            td.addEventListener('click', onClickHandler);

            tr.appendChild(td);
        }

        myTable.appendChild(tr);
    }
}

function onClickHandler(e){

    //logic for disabled cell
    if(e.target.style.backgroundColor == 'red') return

    const clickedNum = e.target.getAttribute('id')

    if(isPrime(clickedNum)){ //clicked on prime number
        clickAudio1.play();
        alert('Better Luck Next Time');
        window.location.reload();
        return
    }
    else { //clicked on non-prime number
        clickAudio.play();
        score++;
        console.log("score ",score);
        document.querySelector('#score').innerText = score;
    }


    //disabling multiples of non-prime numbers
    for(let i=clickedNum; i<=levelNumber*levelNumber; i++){
        if(i % clickedNum == 0) { //all the multiples
            document.getElementById(i).style.backgroundColor = 'red';
            // document.getElementById(i).innerText = i;
        }
    }

    //handle 1
    if(clickedNum == 1){
        alert("You have won!!")
        window.location.reload();
    }
}

//checking prime number
function isPrime(num){
    if(num == 1) return false
    for(let i=2; i<num; i++) {
        if(num % i == 0) return false;
    }
    return true;
}