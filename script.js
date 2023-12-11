let board = ["", "", "", "", "", "", "", "", ""];

let currentPlayer ="X";


let cell =document.querySelectorAll(".cell");

let resetButton =document.querySelector('#reset');

let meassgeElement =document.querySelector('#message');



cell.forEach((cell, index) =>{
    cell.addEventListener("click" , () => {

        
        if (board[index] === ""&&
        !isGameOver()){
            board[index] = currentPlayer;
            cell.classList.add
            (currentPlayer.toLowerCase());
            cell.innerHTML =currentPlayer;

            

            if(isGameOver()){
                meassgeElement.innerHTML = 
                currentPlayer + "wins!";
                cell.forEach((cell) => cell.
                removeEventListener("click",
                handleCellClick));
            }else if(!board.includes("")){
                
                meassgeElement.innerHTML=
                "It's a draw!";
            }else{
                currentPlayer = 
                currentPlayer == "X" ?
                "o" : "X";
                meassgeElement.innerHTML =
                currentPlayer +" 's turn"

            }
        }

    });
});

resetButton.addEventListener("click",() => {
    board = ["", "", "", "", "", "", "", "", ""];

    currentPlayer ="X";
    cell.forEach((cell) => {
        cell.classList.remove("x" , "o" );
        cell.innerHTML ="";
    });

    meassgeElement.innerHTML ="X's turn";
    cell.forEach((cell) => cell.addEventListener("click",
    handleCellClick));

 })


function isGameOver (){
    
    
    const winningCombo = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ];

    return winningCombo.some((combo) => {
        return(
            board[combo[0]] !== ""&&
            board[combo[0]] === board
            [combo[1]]&&
            board[combo[1]]  === board
            [combo[2]]
        );
    });
}

function handleCellClick(){
    console.log("cell clicked");
}
