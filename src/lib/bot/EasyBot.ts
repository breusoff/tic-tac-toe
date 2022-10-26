import getWinCombinations from "src/lib/getWinCombinations";
import {getRandomArrayElement} from "src/lib/random";
import {GameState} from "src/types/GameState";

export interface IBotStep {
    row: number;
    cell: number;
}

export type BotStep = IBotStep | undefined;

class EasyBot {
    winCombinations = getWinCombinations();

    getRandomStep(state: GameState): BotStep {
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

    takeStep(state: GameState): BotStep {
        return this.getRandomStep(state);
    }
}

export default EasyBot;
