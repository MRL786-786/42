var ball;
var database;
var position;
var gameState = 0;
var playerCount
var form, game, player;
var allPlayers;
var car1,car2,car3,car4,cars;
var gameEnd = false;

function preload(){
    car1Image = loadImage("images/car1.png");
    car2Image = loadImage("images/car2.png");
    car3Image = loadImage("images/car3.png");
    car4Image = loadImage("images/car4.png");
    trackImage = loadImage("images/track.jpg");
}


function setup(){
    createCanvas(displayWidth-50,displayHeight-75);
database = firebase.database();


game = new Game()
game.getState()
game.start()
}
 






function draw(){
    background("white");
    if (playerCount=== 4){
        game.update(1);

    }

    if(gameState===1){
        clear()
        game.play()
    }

    if (gameState===2){
        game.End()
        game.update(2);
    }
}
