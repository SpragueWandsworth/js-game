//for collision its: if player.xy === thing.xy colision is happening 

const scoreLabel = document.getElementById("score-label");
const canvas = document.getElementById("game-window");
const ctx = canvas.getContext("2d");

const gameWidth = canvas.width;
const gameHeight = canvas.height;

const coinColor = "Yellow";
const coinSize = 5;

const enemyColor = "Red";
const enemySize = 25;

const playerColor = "Green";
const playerSize = 25;
const playerSpeed = 5;

let player = {x: 25, y: 25, width: playerSize, height: playerSize};
let enemy = {x: 250, y: 100, width: enemySize, height: enemySize};
let coin = {x: 75, y: 75, width: coinSize, height: coinSize};

let score = 0;

let playerAlive = true;

window.addEventListener("keydown", checkPlayerMovement);

startGame();
update();

function drawPlayer() {
    if (!playerAlive) return;
    ctx.fillStyle = playerColor;
    ctx.fillRect(player.x, player.y, playerSize, playerSize);
};

function drawEnemy(){
    ctx.fillStyle = enemyColor;
    ctx.fillRect(enemy.x, enemy.y, enemySize, enemySize);
};

function randomizeCoin() {
    function randomizePosition(max){
        return num = Math.random() * max;
    }
    coin.x = randomizePosition(gameWidth-coinSize);
    coin.y = randomizePosition(gameHeight-coinSize);
    createCoin();
}

function createCoin(){
    
    // ctx.beginPath();
    // ctx.arc(coin.x, coin.y, coinSize, 0, 2*Math.PI);
    // ctx.fillStyle = coinColor;
    // ctx.fill();
    // ctx.strokeStyle = coinColor;
    // ctx.stroke();
};

function startGame() {
    scoreLabel.textContent = score;
    requestAnimationFrame(update);
};

function update() { 
    requestAnimationFrame(update);
    ctx.clearRect(0, 0, gameWidth, gameHeight);

    drawEnemy();
    createCoin();
    drawPlayer();

    if (checkIfColliding(player, enemy)) {
        playerAlive = false;
    }
    if (checkIfColliding(player, coin)) {
        score += 1;
        scoreLabel.textContent = score;
        randomizeCoin();
    }
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
};

function checkIfColliding(a, b){
    return a.x < b.x + b.width &&   //a's top left corner doesn't reach b's top right corner
           a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
           a.y < b.y + b.height &&  //a's top left corner doesn't reach b's bottom left corner
           a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
};


function moveEnemy(){


};
