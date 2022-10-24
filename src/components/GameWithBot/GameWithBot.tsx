import React from "react";
import Game from "src/components/Game";
import {IGameRef} from "src/components/Game/IGameRef";
import getBotStep from "src/lib/getBotStep";
import {GameState} from "src/types/GameState";
import {GameStep} from "src/types/GameStep";

const GameWithBot = () => {
    const botStep = GameStep.o;
    const ref = React.useRef<IGameRef>(null);

    function onBeforeCellClick(step: GameStep) {
        return step === botStep;
    }

    function onStateChange(state: GameState, step: GameStep) {
        if (step !== botStep) return;
        const nextStep = getBotStep(state, step);
        if (!nextStep) return;

        setTimeout(() => {
            ref?.current?.takeStep(nextStep.row, nextStep.cell);
        }, 500);
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
