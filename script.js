function computerPlay(){
    let options = ['Rock', 'Paper', 'Scissor'];
    return options[Math.floor(Math.random() * 3)];
}
     
function playRound (){
    player = prompt('Enter your choice!').toUpperCase();
      computer = computerPlay().toUpperCase();
    if (player === computer) {
        return 0
    }  
    else if (player === 'ROCK' && computer === 'SCISSOR'){
        return 1;
    }
    else if (player === 'PAPER' && computer === 'SCISSOR')
    {
        return -1
    }
    else if (player === 'ROCK' && computer === 'PAPER')
    {
        return -1
    }
    else if (player === 'SCISSOR' && computer === 'PAPER')
    {
        return 1
    }
    else if (player === 'PAPER' && computer === 'ROCK')
    {
        return 1
    }
    else if (player === 'SCISSOR' && computer === 'ROCK')
    {
        return -1
    }
}  
function game (){
    let result = 0
    for (let i = 0; i < 2; i++){
        result += playRound()
    }
    if (result > 0){
        return 'you won!'
    }
    else if (result < 0){
        return 'computer won!'
    }
    else return 'tie!'
}
console.log(game())