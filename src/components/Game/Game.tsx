import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
} from "react";
import GameGrid from "src/components/Game/GameGrid";
import {IGameRef} from "src/components/Game/IGameRef";
import Step from "src/components/Step";
import useWinsContext from "src/context/WinsContext";
import deepClone from "src/lib/deepClone";
import detectWinCombination, {
    IWinState,
    defaultWinState,
} from "src/lib/detectWinCombination";
import GameWinnerModal from "src/modals/GameWinnerModal";
import {GameState, defaultState} from "src/types/GameState";
import {GameStep} from "src/types/GameStep";
import {GameWrapper} from "./Game.styles";

interface IGameProps {
    onBeforeCellClick?: (step: GameStep) => boolean;
    onStateChange?: (state: GameState, step: GameStep) => void;
}

const Game = forwardRef<IGameRef, IGameProps>(
    ({onBeforeCellClick = () => false, onStateChange}, ref) => {
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

        function takeStep(rowIndex: number, cellIndex: number) {
            setState((prevState) => {
                const copy = deepClone(prevState);
                copy[rowIndex][cellIndex] = step;
                return [...copy];
            });
            toggleStep();
        }

        function onCellClick(rowIndex: number, cellIndex: number) {
            const skipClick = onBeforeCellClick(step);
            if (winner || skipClick) return;
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
            onStateChange && onStateChange(state, step);
        }, [state, step, onStateChange]);

        useImperativeHandle(ref, () => ({
            takeStep,
        }));

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
    },
);

export default Game;
