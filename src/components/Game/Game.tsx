import React, {FC, useCallback, useEffect, useMemo, useState} from "react";
import GameGrid from "src/components/Game/GameGrid";
import Step from "src/components/Step";
import useWinsContext from "src/context/WinsContext";
import deepClone from "src/lib/deepClone";
import detectWinCombination, {
    IWinState,
    defaultWinState,
} from "src/lib/detectWinCombination";
import getBotStep from "src/lib/getBotStep";
import GameWinnerModal from "src/modals/GameWinnerModal";
import {GameState, defaultState} from "src/types/GameState";
import {GameStep} from "src/types/GameStep";
import {GameWrapper} from "./Game.styles";

interface IGameProps {
    bot?: boolean;
    userStep?: GameStep;
}

const Game: FC<IGameProps> = ({bot, userStep = GameStep.x}) => {
    const [state, setState] = useState<GameState>(defaultState);
    const [step, setStep] = useState<GameStep>(GameStep.x);
    const botStep = useMemo(() => {
        return bot && step !== userStep;
    }, [step, userStep, bot]);

    const {setWinner} = useWinsContext();
    const [{winner, combination}, setResult] =
        useState<IWinState>(defaultWinState);

    function toggleStep() {
        setStep((prevState) =>
            prevState === GameStep.x ? GameStep.o : GameStep.x,
        );
    }

    const takeStep = useCallback(
        (rowIndex: number, cellIndex: number) => {
            setState((prevState) => {
                const copy = deepClone(prevState);
                copy[rowIndex][cellIndex] = step;
                return [...copy];
            });
            toggleStep();
        },
        [step],
    );

    function onCellClick(rowIndex: number, cellIndex: number) {
        if (winner || botStep) return;
        takeStep(rowIndex, cellIndex);
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

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (botStep) {
            const nextStep = getBotStep(state, step);
            if (nextStep) {
                timeout = setTimeout(() => {
                    takeStep(nextStep.row, nextStep.cell);
                }, 300);
            }
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [state, botStep, step, takeStep]);

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
