const Cell = require("../Cell");

describe("Cell", () => {
    describe("constructor", () => {
        it("should create a cell with the specified initial state", () => {
            const cell = new Cell(true);
            expect(cell.currentState).toEqual(true);
        });
    });
    describe("calculateNextState", () => {
        it("should set the next state to false if the cell has no live neighbors", () => {
            const cell = new Cell(true);
            cell.calculateNextState([]);
            expect(cell.nextState).toBe(false);
        });

        it("should set the next state to false if the cell has one live neighbor", () => {
            const cell1 = new Cell(true);
            const cell2 = new Cell(true);
            cell1.calculateNextState([cell2]);
            expect(cell1.nextState).toBe(false);
        });

        it("should set the next state to true if the cell has two live neighbors", () => {
            const cell1 = new Cell(true);
            const cell2 = new Cell(true);
            const cell3 = new Cell(true);
            cell1.calculateNextState([cell2, cell3]);
            expect(cell1.nextState).toBe(true);
        });

        it("should set the next state to true if the cell has three live neighbors", () => {
            const cell1 = new Cell(true);
            const cell2 = new Cell(true);
            const cell3 = new Cell(true);
            const cell4 = new Cell(true);
            cell1.calculateNextState([cell2, cell3, cell4]);
            expect(cell1.nextState).toBe(true);
        });

        it("should set the next state to false if the cell has four live neighbors", () => {
            const cell1 = new Cell(true);
            const cell2 = new Cell(true);
            const cell3 = new Cell(true);
            const cell4 = new Cell(true);
            const cell5 = new Cell(true);
            cell1.calculateNextState([cell2, cell3, cell4, cell5]);
            expect(cell1.nextState).toBe(false);
        });
    });
});
