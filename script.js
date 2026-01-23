//for collision its: if player.xy === thing.xy colision is happening 

const canvas = document.getElementById("game-window");
const ctx = canvas.getContext("2d");

const gameWidth = canvas.width;
const gameHeight = canvas.height;

let player = {x: 25, y: 25};
let enemy = {x: 250, y: 100};
let coin = {x: 75, y: 75};

const coinColor = "Yellow";
const coinSize = 5;

const enemyColor = "Red";
const enemySize = 25;

const playerColor = "Green";
const playerSize = 25;
const playerSpeed = 5;
// const playerCenterX = player.x + playerSize/2;
// const playerCenterY = player.y + playerSize/2;

window.addEventListener("keydown", checkPlayerMovement);

startGame();
update();

function drawPlayer() {
    ctx.fillStyle = playerColor;
    ctx.fillRect(player.x, player.y, playerSize, playerSize);
};

// function erasePlayer(){
//     ctx.fillStyle = "White";
//     ctx.fillRect(player.x, player.y, playerSize, playerSize);
// };

function drawEnemy(){
    ctx.fillStyle = enemyColor;
    ctx.fillRect(enemy.x, enemy.y, enemySize, enemySize);
};

// function eraseEnemy(){
//     console.log("enemy erased")
//     ctx.fillStyle = "White";
//     ctx.fillRect(enemy.x, enemy.y, enemySize, enemySize);
// };

function createCoin(){
    ctx.beginPath();
    ctx.arc(coin.x, coin.y, coinSize, 0, 2*Math.PI);
    ctx.fillStyle = coinColor;
    ctx.fill();
    ctx.strokeStyle = coinColor;
    ctx.stroke();
};

function startGame() {
    requestAnimationFrame(update);
    drawPlayer();
    drawEnemy();
    createCoin();
};

function update() { 
    requestAnimationFrame(update);
    ctx.clearRect(0, 0, gameWidth, gameHeight);

    drawEnemy();
    createCoin();
    drawPlayer();

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
                player.x -= playerSpeed;
            }
            break;
        case UP:
            if (player.y > 0) {
                player.y -= playerSpeed;
            }
            break;
        case RIGHT:
            if (player.x < gameWidth - playerSize) {
                player.x += playerSpeed;
            }
            break;
        case DOWN:
            if (player.y < gameHeight - playerSize) {
                player.y += playerSpeed;
            }
            break;
    };
    //Player collision
    // if (player.x + playerSize/2 >= coin.x - coinSize *4 && player.x <= coin.x + coinSize) {
    //     if (player.y >= coin.y - coinSize *4 && player.y <= coin.y + coinSize){
    //         alert("player touched coin");
    //     };
    // };
    // if (player.x === enemy.x) {eraseEnemy};
};

function moveEnemy(){


};
