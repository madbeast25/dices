

var randomNumber1;
var dice=[0,1,2,3,4,5,6];
dice[0]="images/dice1.png";
dice[1]="images/dice2.png";
dice[2]="images/dice3.png";
dice[3]="images/dice4.png";
dice[4]="images/dice5.png";
dice[5]="images/dice6.png";

randomNumber1= Math.floor(Math.random("dice")*6);

var diceRoll=dice[randomNumber1];



document.querySelector(".img1").src=diceRoll;

var randomNumber2;
var dice2=[0,1,2,3,4,5,6];
dice2[0]="images/dice1.png";
dice2[1]="images/dice2.png";
dice2[2]="images/dice3.png";
dice2[3]="images/dice4.png";
dice2[4]="images/dice5.png";
dice2[5]="images/dice6.png";

randomNumber2= Math.floor(Math.random("dice2")*6);

var diceRoll2=dice2[randomNumber2];



document.querySelector(".img2").src=diceRoll2;



if(diceRoll>diceRoll2){
    document.querySelector("h1").textContent="🚩 Player1 wins";
}
else if(diceRoll<diceRoll2){
    document.querySelector("h1").textContent="Player2 wins 🚩";
}
else if(diceRoll===diceRoll2){
    document.querySelector("h1").textContent="Draw 🎌";
}