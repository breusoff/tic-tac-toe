import EasyBot from "src/lib/bot/EasyBot";
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
            default:
                return new EasyBot();
        }
    }
}

export default BotFactory;
