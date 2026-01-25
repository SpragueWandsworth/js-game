
const scoreLabel = document.getElementById("score-label");
const enemyScoreLabel = document.getElementById("enemy-score-label");
const canvas = document.getElementById("game-window");
const ctx = canvas.getContext("2d");

const gameWidth = canvas.width;
const gameHeight = canvas.height;

const coinColor = "Yellow";
const coinSize = 16;
const coinImg = new Image();
coinImg.src = "https://art.pixilart.com/sr29401dd261a9a.png";

const enemyColor = "Red";
const enemySize = 25;
const enemySpeed = 25;

const playerColor = "Green";
const playerSize = 25;
const playerSpeed = 25;

let player = {x: 25, y: 25, width: playerSize, height: playerSize};
let enemy = {x: 250, y: 100, width: enemySize, height: enemySize};
let coin = {x: 75, y: 75, width: coinSize, height: coinSize};

let score = 0;
let enemyScore = 0;

let playerAlive = true;

window.addEventListener("keydown", checkPlayerMovement);

startGame();
update();
setInterval(moveEnemy, 250);

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
    drawCoin();
}

function drawCoin(){
    ctx.drawImage(coinImg, coin.x, coin.y, coinSize, coinSize);
};

function startGame() {
    scoreLabel.textContent = score;
    enemyScoreLabel.textContent = enemyScore;
    requestAnimationFrame(update);
};

function update() { 
    requestAnimationFrame(update);
    ctx.clearRect(0, 0, gameWidth, gameHeight);

    drawEnemy();
    drawCoin();
    drawPlayer();

    if (checkIfColliding(player, enemy)) {
        playerAlive = false;
    }
    if (checkIfColliding(player, coin)) {
        score += 1;
        scoreLabel.textContent = score;
        randomizeCoin();
    }
    if (checkIfColliding(enemy, coin)) {
        enemyScore += 1;
        enemyScoreLabel.textContent = enemyScore;
        randomizeCoin();
    }
};

function checkPlayerMovement(event) {
    if (!playerAlive) return;

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
    //if (score > 0) return;
    let randomDirection = Math.floor(Math.random() * 4);
    
    switch(randomDirection) {
        case 0: //Up
            if (enemy.y > 0) {
                enemy.y -= enemySpeed;
            }
            break;
        case 1: //Down
            if (enemy.y < gameHeight - enemySize) {
                enemy.y += enemySpeed;
            }
            break;
        case 2: //Left
            if (enemy.x > 0) {
                enemy.x -= enemySpeed;
            }
            break;
        case 3: //Right
            if (enemy.x < gameWidth - enemySize) {
                enemy.x += enemySpeed;
            }
            break;
    }
    // console.log(randomDirection);
    // console.log(enemy.x, enemy.y);
};
