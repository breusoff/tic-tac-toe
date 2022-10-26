import EasyBot, {BotStep, IGameCellInfo} from "src/lib/bot/EasyBot";
import isEqual from "src/lib/isEqual";
import {GameState, defaultState} from "src/types/GameState";
import {GameStep} from "src/types/GameStep";

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

        // find better steps
        const possibleSteps = this.matchStateWithWinCombinations(state);
        for (let i = 0; i < possibleSteps.length; i += 1) {
            const cell = this.shouldMakeStepOnLine(possibleSteps[i]);

            if (cell) {
                return cell;
            }
        }

        // fallback
        return this.getRandomStep(state);
    }
}

export default MediumBot;
