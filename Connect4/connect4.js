var player = 1;
var boardArr = [];
var length = 42;
for(var i = 0; i<42; i++) {
    boardArr.push("E");
}

document.addEventListener("click", (e) => {
});

function change(index)
{
    while(boardArr[index+6] == "E" && index <= 41) {
        index = index + 7;
    }
    fill(index);
    checkForWin();
}

function fill(num) {
    let btn = document.getElementById("myButton" + num);
    if(player == 1)
    {
        btn.value="X";
        boardArr[num-1] = "X";
        player = 2;
        document.querySelector("#playerTurn").innerText = " It is now O's turn! "
    }
    else if (player ==2) {
        btn.value="O";
        boardArr[num-1] = "O";
        player = 1;
        document.querySelector("#playerTurn").innerText = " It is now X's turn! "
    }
}

function checkForWin() {
    if(horizontalCheck()) {
        if(player == 2) 
        {
            document.querySelector('#playerTurn').innerText = "X has won!!!! Refresh the page to play again!";
        }
        else {
            document.querySelector('#playerTurn').innerText = "O has won!!!! Refresh the page to play again!";
        }
    }

    if(verticalCheck()) {
        if(player == 2) 
        {
            document.querySelector('#playerTurn').innerText = "X has won!!!! Refresh the page to play again!";
        }
        else {
            document.querySelector('#playerTurn').innerText = "O has won!!!! Refresh the page to play again!";
        }
    }

    if(downDiagCheck()) {
        if(player == 2) 
        {
            document.querySelector('#playerTurn').innerText = "X has won!!!! Refresh the page to play again!";
        }
        else {
            document.querySelector('#playerTurn').innerText = "O has won!!!! Refresh the page to play again!";
        }
    }

    if(upDiagCheck()) {
        if(player == 2) 
        {
            document.querySelector('#playerTurn').innerText = "X has won!!!! Refresh the page to play again!";
        }
        else {
            document.querySelector('#playerTurn').innerText = "O has won!!!! Refresh the page to play again!";
        }
    }
    
}

function horizontalCheck() 
{
    for(let i = 0; i< 42; i++) 
    {
        if(i % 7 != 6 && i % 7 != 5 && i % 7 != 4) 
        {
            if(boardArr[i] == boardArr[i + 1] && boardArr[i]== boardArr[i+2] && boardArr[i] == boardArr[i+3] && boardArr[i] != "E") 
            {
                return true;
            }
        }
    }
}

function verticalCheck() 
{
    for(let i = 0; i< 42; i++) 
    {
        if(i <20) 
        {
            if(boardArr[i] == boardArr[i + 7] && boardArr[i]== boardArr[i+14] && boardArr[i] == boardArr[i+21] && boardArr[i] != "E") 
            {
                return true;
            }
        }
    }
}

function downDiagCheck() 
{
    for(let i = 0; i< 42; i++) 
    {
        if(i <20) 
        {
            if(boardArr[i] == boardArr[i + 8] && boardArr[i]== boardArr[i+16] && boardArr[i] == boardArr[i+24] && boardArr[i] != "E") 
            {
                return true;
            }
        }
    }
}

function upDiagCheck() 
{
    for(let i = 0; i< 42; i++) 
    {
        if(i <20) 
        {
            if(boardArr[i] == boardArr[i + 6] && boardArr[i]== boardArr[i+12] && boardArr[i] == boardArr[i+18] && boardArr[i] != "E") 
            {
                return true;
            }
        }
    }
}
