import React, {FC} from "react";
import Game from "src/components/Game";
import {IGameRef} from "src/components/Game/IGameRef";
import BotFactory, {BotComplexity} from "src/lib/bot/BotFactory";
import {GameState} from "src/types/GameState";
import {GameStep} from "src/types/GameStep";

interface IGameWithBot {
    user?: GameStep;
}

const bot = new BotFactory().create(BotComplexity.medium);

const GameWithBot: FC<IGameWithBot> = ({user = GameStep.x}) => {
    const ref = React.useRef<IGameRef>(null);

    function onBeforeCellClick(step: GameStep) {
        return step !== user;
    }

    function takeBotStep(state: GameState, step: GameStep) {
        const nextStep = bot.takeStep(state);
        if (!nextStep) return;

        setTimeout(() => {
            ref?.current?.takeStep(nextStep.row, nextStep.cell);
        }, 500);
    }

    function onStateChange(state: GameState, step: GameStep) {
        if (step === user) return;
        takeBotStep(state, step);
    }

    return (
        <Game
            ref={ref}
            onBeforeCellClick={onBeforeCellClick}
            onStateChange={onStateChange}
        />
    );
};

export default GameWithBot;
