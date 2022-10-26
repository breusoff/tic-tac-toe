import getWinCombinations from "src/lib/getWinCombinations";
import {getRandomArrayElement} from "src/lib/random";
import {GameCellState} from "src/types/GameCellState";
import {GameState} from "src/types/GameState";

export interface IBotStep {
    row: number;
    cell: number;
}

export type BotStep = IBotStep | undefined;

export interface IGameCellInfo {
    step: IBotStep;
    value: GameCellState;
}

class EasyBot {
    protected winCombinations = getWinCombinations();

    protected getRandomStep(state: GameState): BotStep {
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

    protected matchStateWithWinCombinations(state: GameState) {
        return this.winCombinations.map((combo) => {
            const line: IGameCellInfo[] = combo.map((j) => {
                const [row, cell] = j;

                return {
                    value: state[row][cell],
                    step: {row, cell},
                };
            });

            return line;
        });
    }

    takeStep(state: GameState): BotStep {
        return this.getRandomStep(state);
    }
}

export default EasyBot;
