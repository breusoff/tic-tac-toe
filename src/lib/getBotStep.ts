import isEqual from "src/lib/isEqual";
import {getRandomArrayElement} from "src/lib/random";
import {GameCellState} from "src/types/GameCellState";
import {GameState, defaultState} from "src/types/GameState";
import {GameStep} from "src/types/GameStep";

interface IBotStep {
    row: number;
    cell: number;
}

type BotStep = IBotStep | undefined;

function gerRandomStep(state: GameState): BotStep {
    const steps: IBotStep[] = [];

    state.forEach((row, rowIndex) =>
        row.forEach((cell, cellIndex) => {
            if (cell !== null) return;
            steps.push({
                row: rowIndex,
                cell: cellIndex,
            });
        }),
    );

    if (!steps.length) return undefined;

    return getRandomArrayElement(steps);
}

function shouldMakeStepOnLine(line: GameCellState[]): boolean {
    // [null, null, null]
    const emptyLine = line.filter((i) => i === null).length === line.length;
    if (emptyLine) return false;

    // [0,1][1,2][0,2]
    const [first, second, third] = line;
    return first === second || second === third || first === third;
}

const bot = {
    /**
     * random moves, silly bot
     */
    easy: (state: GameState): BotStep => {
        return gerRandomStep(state);
    },
    /**
     * better moves
     */
    medium: (state: GameState, step: GameStep): BotStep => {
        // random on first turn
        if (isEqual(state, defaultState)) {
            return gerRandomStep(state);
        }

        const size = state.length;

        console.log("step", step);

        //[x, null, o]
        //[null, null, null]
        //[o, o, null]
        //[x, o, x]

        shouldMakeStepOnLine([GameStep.x, null, null]);

        // // horizontal
        // for (let i = 0; i < size; i += 1) {
        //     const line = state[i];
        //
        //     console.log("line", line, shouldMakeStepOnLine(line));
        // }

        return gerRandomStep(state);
    },
};

const getBotStep = (state: GameState, step: GameStep): BotStep => {
    return bot.medium(state, step);
    return bot.easy(state);
};

export default getBotStep;
