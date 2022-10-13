import getWinCombinations from "src/lib/getWinCombinations";
import {GameState} from "src/types/GameState";
import {GameWinner} from "src/types/GameWinner";

const winCombinations = getWinCombinations(3);

interface IWinState {
    winner: GameWinner;
    combination: number[][];
}

const detectWinCombination = (state: GameState): IWinState => {
    for (let i = 0; i < winCombinations.length; i += 1) {
        const combination = winCombinations[i];
        const [a, b, c] = combination;

        const cellA = state[a[0]][a[1]];
        const cellB = state[b[0]][b[1]];
        const cellC = state[c[0]][c[1]];

        if (cellA && cellA === cellB && cellA === cellC) {
            return {
                winner: cellA,
                combination,
            };
        }
    }

    const fState = state.flat();
    const hasEmptyValues = fState.some((i) => i === null);

    return {
        winner: hasEmptyValues ? null : "ties",
        combination: [],
    };
};

export default detectWinCombination;
