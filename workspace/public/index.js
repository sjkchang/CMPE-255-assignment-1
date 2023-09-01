const Game = require("./Game");

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const CELL_SIZE = 5; // Set the cell size to 5 pixels
const game = new Game(100, 100, CELL_SIZE, canvas);

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.grid.forEach((row, y) => {
        row.forEach((cell, x) => {
            ctx.fillStyle = cell.currentState ? "#000" : "#fff";
            ctx.fillRect(
                x * game.cellSize,
                y * game.cellSize,
                game.cellSize,
                game.cellSize
            );
        });
    });
}

let intervalId = setInterval(() => {
    if (!game.paused) {
        game.updateGrid();
        render();
    }
}, game.generationDelay);

document.getElementById("pauseButton").addEventListener("click", () => {
    game.paused = !game.paused;
    const pauseButton = document.getElementById("pauseButton");
    pauseButton.textContent = game.paused ? "Unpause" : "Pause";
});

document.getElementById("resetButton").addEventListener("click", () => {
    game.reset();
});

document.getElementById("gridSizeInput").addEventListener("input", (event) => {
    const gridSize = parseInt(event.target.value);
    game.setGridSize(gridSize, gridSize);
    render();
});

document.getElementById("speedSlider").addEventListener("input", (event) => {
    const speed = parseInt(event.target.max) - parseInt(event.target.value);
    game.updateGenerationDelay(speed);
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        if (!game.paused) {
            game.updateGrid();
            render();
        }
    }, game.generationDelay);
});
