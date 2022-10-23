import React, {useEffect, useState} from "react";
import GameGrid from "src/components/Game/GameGrid";
import Step from "src/components/Step";
import useWinsContext from "src/context/WinsContext";
import deepClone from "src/lib/deepClone";
import detectWinCombination, {
    IWinState,
    defaultWinState,
} from "src/lib/detectWinCombination";
import GameWinnerModal from "src/modals/GameWinnerModal";
import {GameState} from "src/types/GameState";
import {GameStep} from "src/types/GameStep";
import {GameWrapper} from "./Game.styles";

const defaultState: GameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const Game = () => {
    const [state, setState] = useState<GameState>(defaultState);
    const [step, setStep] = useState<GameStep>(GameStep.x);
    const {setWinner} = useWinsContext();
    const [{winner, combination}, setResult] =
        useState<IWinState>(defaultWinState);

    function toggleStep() {
        setStep((prevState) =>
            prevState === GameStep.x ? GameStep.o : GameStep.x,
        );
    }

    function onCellClick(rowIndex: number, cellIndex: number) {
        if (winner) return;
        setState((prevState) => {
            const copy = deepClone(prevState);
            copy[rowIndex][cellIndex] = step;
            return [...copy];
        });
        toggleStep();
    }

    function clear() {
        setState(defaultState);
        setStep(GameStep.x);
        setWinner(null);
    }

    useEffect(() => {
        const newResult = detectWinCombination(state);
        setWinner(newResult.winner);
        setResult(newResult);
    }, [state]);

    return (
        <GameWrapper>
            <GameGrid
                state={state}
                combination={combination}
                onCellClick={onCellClick}
            />
            <Step step={step} />
            <GameWinnerModal
                isOpen={!!winner}
                winner={winner}
                onClose={clear}
            />
        </GameWrapper>
    );
};

export default Game;
