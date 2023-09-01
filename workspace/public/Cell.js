class Cell {
    constructor(initialState = false) {
        this.currentState = initialState;
        this.nextState = false;
    }

    calculateNextState(neighbors) {
        const liveNeighbors = neighbors.filter(
            (cell) => cell.currentState
        ).length;
        if (this.currentState) {
            this.nextState = liveNeighbors === 2 || liveNeighbors === 3;
        } else {
            this.nextState = liveNeighbors === 3;
        }
    }
}

module.exports = Cell;
