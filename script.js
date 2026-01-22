//for collision its: if player.xy === thing.xy colision is happening 

const canvas = document.getElementById("game-window");
const ctx = canvas.getContext("2d");

const gameWidth = canvas.width;
const gameHeight = canvas.height;

const coinColor = "Yellow";
const coinSize = 5;

const playerColor = "Green";
const playerSize = 25;
const playerSpeed = 3;

let player = {x: 25, y: 25};
let coin = {x: 75, y: 75};

window.addEventListener("keydown", checkPlayerMovement);

startGame();
step();

function drawPlayer() {
    ctx.fillStyle = playerColor;
    ctx.fillRect(player.x, player.y, playerSize, playerSize);
};

function erasePlayer(){
    ctx.fillStyle = "White"; 
    ctx.fillRect(player.x, player.y, playerSize, playerSize);
};

function createCoin(){
    ctx.beginPath();
    ctx.arc(coin.x, coin.y, coinSize, 0, 2*Math.PI);
    ctx.fillStyle = coinColor;
    ctx.fill();
    ctx.strokeStyle = coinColor;
    ctx.stroke();
};

function startGame() {
    drawPlayer();
    createCoin();
};

function step() {
    setInterval(()=>{
        
    }, 100);
};

function checkPlayerMovement(event) {
    const key = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    switch(key) {
        case LEFT:
            if (player.x > 0) {
                erasePlayer();
                player.x -= playerSpeed;
                drawPlayer();
            }
            break;
        case UP:
            if (player.y > 0) {
                erasePlayer();
                player.y -= playerSpeed;
                drawPlayer();
            }
            break;
        case RIGHT:
            if (player.x < gameWidth - playerSize) {
                erasePlayer();
                player.x += playerSpeed;
                drawPlayer();
            }
            break;
        case DOWN:
            if (player.y < gameHeight - playerSize) {
                erasePlayer();
                player.y += playerSpeed;
                drawPlayer();
            }
            break;
    };
    if (player.x >= coin.x - coinSize *4 && player.x <= coin.x + coinSize) {
        if (player.y >= coin.y - coinSize *4 && player.y <= coin.y + coinSize){
            alert("player touched coin");
        };
    };
};
