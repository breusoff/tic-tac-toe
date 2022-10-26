import EasyBot, {BotStep, IBotStep} from "src/lib/bot/EasyBot";
import isEqual from "src/lib/isEqual";
import {GameCellState} from "src/types/GameCellState";
import {GameState, defaultState} from "src/types/GameState";
import {GameStep} from "src/types/GameStep";

interface IGameCellInfo {
    step: IBotStep;
    value: GameCellState;
}

class MediumBot extends EasyBot {
    private shouldMakeStepOnLine(line: IGameCellInfo[]): BotStep {
        const stepTrigger = line.length - 1;

        let xCount = 0;
        let yCount = 0;

        line.forEach((i) => {
            if (i.value === GameStep.x) xCount += 1;
            if (i.value === GameStep.o) yCount += 1;
        });

        if (xCount === stepTrigger || yCount === stepTrigger) {
            return line.find((i) => i.value === null)?.step;
        }

        return undefined;
    }

    takeStep(state: GameState): BotStep {
        // random on first turn
        if (isEqual(state, defaultState)) {
            return this.getRandomStep(state);
        }

        for (let i = 0; i < this.winCombinations.length; i += 1) {
            const combo = this.winCombinations[i];

            const line: IGameCellInfo[] = combo.map((j) => ({
                value: state[j[0]][j[1]],
                step: {
                    row: j[0],
                    cell: j[1],
                },
            }));

            const cell = this.shouldMakeStepOnLine(line);
            if (cell) {
                return cell;
            }
        }

        return this.getRandomStep(state);
    }
}

export default MediumBot;
