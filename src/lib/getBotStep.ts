import {GameState} from "src/types/GameState";
import {GameStep} from "src/types/GameStep";

interface IBotStep {
    row: number;
    cell: number;
}

type BotStep = IBotStep | undefined;

const getRandomArrayElement = <T>(array: T[] = []): number => {
    return Math.floor(Math.random() * array.length);
};

const bot = {
    /**
     * random moves, silly bot
     */
    easy: (state: GameState): BotStep => {
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

        const random = getRandomArrayElement(steps);
        return steps[random];
    },
};

const getBotStep = (state: GameState, step: GameStep): BotStep => {
    return bot.easy(state);
};

export default getBotStep;
