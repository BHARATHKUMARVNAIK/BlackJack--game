
let sum = 0 ;
let cards = []

let player = {
    name : "Bharath",
    chips : 150
}



let Blackjack = false;
let isAlive = true;

let message = " ";
let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips;


function getRandomNum(){
    let randomNum = Math.floor(Math.random() * 13) + 1

    if(randomNum > 10){
        return 10
    }else if(randomNum === 1){
        return 11
    }else{
        return randomNum;
    }
}



function startGame(){

    isAlive = true;
    firstCard = getRandomNum();
    secondCard = getRandomNum();

    cards = [firstCard , secondCard];
    sum = firstCard + secondCard

    renderGame();
}


function renderGame(){

    cardsEl.textContent = "cards : ";

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + "  ";
    }

    sumEl.textContent = "sum : " + " " + sum;

    if(sum < 21){
        message = "Do, you want to draw a card";
    }else if(sum == 21){
        message = "wohoo! you got a blackjack";
        Blackjack = true;
    }else{
            message = "you are out of game";
            isAlive = false;
   }
   messageEl.textContent = message;
};


function newcard(){
    if(isAlive == true && Blackjack == false){

        let card = getRandomNum();
        sum += card;
        cards.push(card);

        renderGame();

        if(sum > 21){
            message = "you are out of the game";
            isAlive = false;
            renderGame();

            setTimeout(() => {
                alert("game over");
                startnew();
            },100);
    
        }
    }
    //alert("Game over, start new game");
    
}

function startnew(){
    sum = 0;
    cards = [];
    message = " ";
    messageEl.textContent = message;
    isAlive = false;
    Blackjack = false;
    
    sumEl.textContent = "sum : " + sum;
    cardsEl.textContent = "cards :" + cards;
    
}
startnew();
