import {GameState} from "src/types/GameState";
import {GameWinner} from "src/types/GameWinner";

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const detectWinCombination = (state: GameState): GameWinner => {
    const fState = state.flat();

    for (let i = 0; i < winCombinations.length; i += 1) {
        const [a, b, c] = winCombinations[i];

        const cellA = fState[a];
        const cellB = fState[b];
        const cellC = fState[c];

        if (cellA && cellA === cellB && cellA === cellC) {
            return cellA;
        }
    }

    const hasEmptyValues = fState.some((i) => i === null);

    return hasEmptyValues ? null : "ties";
};

export default detectWinCombination;
