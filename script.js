//speed be player size?

const canvas = document.getElementById("game-window");
const ctx = canvas.getContext("2d");

const gameWidth = canvas.width;
const gameHeight = canvas.height;

const playerColor = "Green";
const playerSize = 25;

let player = {x: 20, y: 20};

//ctx.fillText("chumley", gameWidth/2, gameHeight/2);

startGame();

function drawPlayer() {
    ctx.fillStyle = playerColor;
    ctx.fillRect(player.x, player.y, playerSize, playerSize);
};

function startGame() {
    drawPlayer();
};