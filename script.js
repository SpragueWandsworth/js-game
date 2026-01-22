//for collision its: if player.xy === thing.xy colision is happening 

const canvas = document.getElementById("game-window");
const ctx = canvas.getContext("2d");

const gameWidth = canvas.width;
const gameHeight = canvas.height;

const playerColor = "Green";
const playerSize = 25;

let player = {x: 20, y: 20};

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

function startGame() {
    drawPlayer();
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
                player.x -= playerSize;
                drawPlayer();
            }
            break;
        case UP:
            if (player.y > 0) {
                erasePlayer();
                player.y -= playerSize;
                drawPlayer();
            }
            break;
        case RIGHT:
            if (player.x < gameWidth - playerSize) {
                erasePlayer();
                player.x += playerSize;
                drawPlayer();
            }
            break;
        case DOWN:
            if (player.y < gameHeight - playerSize) {
                erasePlayer();
                player.y += playerSize;
                drawPlayer();
            }
            break;  
    };
};
