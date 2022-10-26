import EasyBot, {BotStep} from "src/lib/bot/EasyBot";
import {GameState} from "src/types/GameState";

class HardBot extends EasyBot {
    takeStep(state: GameState): BotStep {
        return super.takeStep(state);
    }
}

export default HardBot;
