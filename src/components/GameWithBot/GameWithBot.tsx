import React, {FC} from "react";
import Game from "src/components/Game";
import {IGameRef} from "src/components/Game/IGameRef";
import getBotStep from "src/lib/getBotStep";
import {GameState} from "src/types/GameState";
import {GameStep} from "src/types/GameStep";

interface IGameWithBot {
    user?: GameStep;
}

const GameWithBot: FC<IGameWithBot> = ({user = GameStep.x}) => {
    const ref = React.useRef<IGameRef>(null);

    function onBeforeCellClick(step: GameStep) {
        return step !== user;
    }

    function takeBotStep(state: GameState, step: GameStep) {
        const nextStep = getBotStep(state, step);
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
