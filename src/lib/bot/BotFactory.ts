import EasyBot from "src/lib/bot/EasyBot";
import HardBot from "src/lib/bot/HardBot";
import MediumBot from "src/lib/bot/MediumBot";

export enum BotComplexity {
    easy,
    medium,
    hard,
}

class BotFactory {
    create(type: BotComplexity) {
        switch (type) {
            case BotComplexity.easy:
                return new EasyBot();
            case BotComplexity.medium:
                return new MediumBot();
            case BotComplexity.hard:
                return new HardBot();
            default:
                return new EasyBot();
        }
    }
}

export default BotFactory;
