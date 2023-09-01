const Game = require("../Game");
const Cell = require("../Cell");
const { JSDOM } = require("jsdom");

describe("Game", () => {
    let canvas;
    beforeAll(() => {
        const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
        canvas = dom.window.document.createElement("canvas");
    });

    describe("initGrid", () => {
        it("should create a grid with the specified width and height", () => {
            const game = new Game(3, 2, 1, canvas);
            expect(game.grid.length).toBe(2);
            expect(game.grid[0].length).toBe(3);
            expect(game.grid[1].length).toBe(3);
        });
    });

    describe("setGridSize", () => {
        it("should set the grid size to the specified width and height", () => {
            const game = new Game(3, 2, 1, canvas);
            game.setGridSize(4, 3);
            expect(game.width).toBe(4);
            expect(game.height).toBe(3);
            expect(game.grid.length).toBe(3);
            expect(game.grid[0].length).toBe(4);
            expect(game.grid[1].length).toBe(4);
            expect(game.grid[2].length).toBe(4);
        });
    });

    describe("updateGrid", () => {
        it("should update the grid to the next generation", () => {
            const game = new Game(3, 3, 1, canvas);
            game.grid = [
                [new Cell(), new Cell(), new Cell()],
                [new Cell(), new Cell(), new Cell()],
                [new Cell(), new Cell(), new Cell()],
            ];
            game.grid[0][0].currentState = true;
            game.grid[0][1].currentState = true;
            game.grid[1][0].currentState = true;
            game.updateGrid();
            expect(game.grid[0][0].currentState).toBe(true);
            expect(game.grid[0][1].currentState).toBe(true);
            expect(game.grid[1][0].currentState).toBe(true);
            expect(game.grid[1][1].currentState).toBe(true);
            expect(game.grid[2][2].currentState).toBe(false);
        });
    });
});
