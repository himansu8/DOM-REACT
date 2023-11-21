/*
    name
    score (no of click) 



    // 3 person
    C 0
    A 4
    B 8
    D 4
*/

let leaderBoard = [
    {players:["C"],attempts:0},
    {players:["A","D"],attempts:4},
    {players:["B"],attempts:8},
    // {players:["B","rajaram"],attempts:8},
    {players:["himansu"],attempts:10},
]


function winnerScore(fname, attempts){
    return {fname, attempts}
}

function doRanking(newWinner){

    const indexFound = leaderBoard.findIndex(ele => ele.attempts == newWinner.attempts);
    console.log(indexFound);

    if(indexFound == -1){
        let tempObj = {
            players: [newWinner.fname],
            attempts:newWinner.attempts
        }

        leaderBoard.push(tempObj);
        console.log(leaderBoard);
    }
    else {
        leaderBoard[indexFound].players.push(newWinner.fname);
        console.log(leaderBoard);
    }

    leaderBoard.sort((a, b) => a.attempts - b.attempts);

}
doRanking();