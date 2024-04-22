let xTurn = true;
let squares = document.querySelectorAll('.square');
let winnerMessage = document.getElementById('winner__message');
squares.forEach( square =>{
    square.addEventListener('click',()=>{
        square.disabled = true;
        if(xTurn){
            square.textContent = 'X';
            xTurn = false;
        }else{
            square.textContent = 'O';
            xTurn = true;
        }


        if(squares[0].textContent == '' && squares[1].textContent == '' && squares[2].textContent == '')
            {

                console.log('game just started')
            }
        
        else if(
            squares[0].textContent == squares[1].textContent && squares[1].textContent == squares[2].textContent || 
            squares[3].textContent == squares[4].textContent && squares[4].textContent == squares[5].textContent ||
            squares[6].textContent == squares[7].textContent && squares[7].textContent == squares[8].textContent || 

            squares[0].textContent == squares[3].textContent && squares[3].textContent == squares[6].textContent || 
            squares[1].textContent == squares[4].textContent && squares[4].textContent == squares[7].textContent ||
            squares[2].textContent == squares[5].textContent && squares[5].textContent == squares[8].textContent || 

            squares[0].textContent == squares[4].textContent && squares[4].textContent == squares[8].textContent || 
            squares[2].textContent == squares[4].textContent && squares[4].textContent == squares[6].textContent)
            
            {

            if(xTurn){
                winnerMessage.textContent = 'O WON';
                // winnerMessage.style.display = 'block';
            }else{
                winnerMessage.textContent = 'X WON';
                // winnerMessage.style.display = 'block';
            }
            }else {
                console.log('Draw')
            }
        
    })


        // CHECK WINNER
    //     if(squares[0].textContent == '' && squares[1].textContent == '' && squares[2].textContent == '' &&  
    //     squares[3].textContent == '' && squares[4].textContent == '' && squares[5].textContent == '' &&
    //     squares[6].textContent == '' && squares[7].textContent == '' && squares[8].textContent == '')
    //         {

    //             console.log('game just started')
    //         }
        
    //     else if(
    //         squares[0].textContent == squares[1].textContent && squares[1].textContent == squares[2].textContent || 
    //         squares[3].textContent == squares[4].textContent && squares[4].textContent == squares[5].textContent ||
    //         squares[6].textContent == squares[7].textContent && squares[7].textContent == squares[8].textContent || 

    //         squares[0].textContent == squares[3].textContent && squares[3].textContent == squares[6].textContent || 
    //         squares[1].textContent == squares[4].textContent && squares[4].textContent == squares[7].textContent ||
    //         squares[2].textContent == squares[5].textContent && squares[5].textContent == squares[8].textContent || 

    //         squares[0].textContent == squares[4].textContent && squares[4].textContent == squares[8].textContent || 
    //         squares[2].textContent == squares[4].textContent && squares[4].textContent == squares[6].textContent)
            
    //         {

    //         if(xTurn){
    //             winnerMessage.textContent = 'O WON';
    //             // winnerMessage.style.display = 'block';
    //         }else{
    //             winnerMessage.textContent = 'X WON';
    //             // winnerMessage.style.display = 'block';
    //         }
    //         }else {
    //             console.log('Draw')
    //         }
        
    // })
})

const StartGame = () =>{
    // START TIMER

    // START GAME
}
const ResetGame = () =>{

};