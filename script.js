const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 600;

let currentColor = 'red';
let score = 0;

function selectColor(color) {
    currentColor = color;
}

function drawBottle() {
    ctx.fillStyle = currentColor;
    ctx.fillRect(150, 500, 100, 100); // Example bottle
}

function updateScore() {
    score += 10;
    document.getElementById('score').innerText = `Score: ${score}`;
}

canvas.addEventListener('click', () => {
    drawBottle();
    updateScore();
});

function redirect() {
    window.open('https://example.com', '_blank');
}

setInterval(redirect, 15000);
