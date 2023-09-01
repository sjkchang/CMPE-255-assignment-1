const Cell = require("./Cell");

class Game {
    constructor(width, height, cellSize, canvas) {
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.grid = [];
        this.initGrid();
        this.paused = false;
        this.canvas = canvas;
        this.canvas.width = this.width * this.cellSize;
        this.canvas.height = this.height * this.cellSize;
        this.generationDelay = 250;
    }

    updateGenerationDelay(delay) {
        this.generationDelay = delay;
    }

    initGrid() {
        for (let y = 0; y < this.height; y++) {
            const row = [];
            for (let x = 0; x < this.width; x++) {
                row.push(new Cell(Math.random() < 0.5));
            }
            this.grid.push(row);
        }
    }

    setGridSize(width, height) {
        this.width = width;
        this.height = height;
        this.grid = [];
        this.initGrid();
        this.canvas.width = this.width * this.cellSize;
        this.canvas.height = this.height * this.cellSize;
    }

    updateGrid() {
        this.grid.forEach((row, y) => {
            row.forEach((cell, x) => {
                const neighbors = this.getNeighbors(x, y);
                cell.calculateNextState(neighbors);
            });
        });
        this.grid.forEach((row) => {
            row.forEach((cell) => {
                cell.currentState = cell.nextState;
            });
        });
    }

    getNeighbors(x, y) {
        const neighbors = [];
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                if (dx !== 0 || dy !== 0) {
                    const nx = x + dx;
                    const ny = y + dy;
                    if (
                        nx >= 0 &&
                        nx < this.width &&
                        ny >= 0 &&
                        ny < this.height
                    ) {
                        neighbors.push(this.grid[ny][nx]);
                    }
                }
            }
        }
        return neighbors;
    }

    reset() {
        this.grid = [];
        this.initGrid();
    }
}

module.exports = Game;
