import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
} from "react";
import GameGrid from "src/components/Game/GameGrid";
import {IGameRef} from "src/components/Game/IGameRef";
import Step from "src/components/Step";
import deepClone from "src/lib/deepClone";
import detectWinCombination, {
    IWinState,
    defaultWinState,
} from "src/lib/detectWinCombination";
import isEqual from "src/lib/isEqual";
import GameWinnerModal from "src/modals/GameWinnerModal";
import {useSetWinner} from "src/redux/entities/wins/winsHooks";
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

        const setWinner = useSetWinner();
        const [{winner, combination}, setResult] =
            useState<IWinState>(defaultWinState);

        function getNextState(rowIndex: number, cellIndex: number) {
            const copy = deepClone(state);
            copy[rowIndex][cellIndex] = step;
            return [...copy];
        }

        function getNextStep(prevStep: GameStep) {
            return prevStep === GameStep.x ? GameStep.o : GameStep.x;
        }

        function takeStep(rowIndex: number, cellIndex: number) {
            const nextState = getNextState(rowIndex, cellIndex);
            const nextStep = getNextStep(step);

            const newResult = detectWinCombination(nextState);

            setState(nextState);

            if (newResult.winner) {
                setWinner(newResult.winner);
                setResult(newResult);
            } else {
                setStep(nextStep);
                onStateChange && onStateChange(nextState, nextStep);
            }
        }

        function onCellClick(rowIndex: number, cellIndex: number) {
            if (winner) return;
            const skipClick = onBeforeCellClick(step);

            if (skipClick) return;
            takeStep(rowIndex, cellIndex);
        }

        function clear() {
            setState(defaultState);
            setResult(defaultWinState);
            setStep(GameStep.x);
            setWinner(null);
        }

        useEffect(() => {
            if (isEqual(state, defaultState)) {
                onStateChange && onStateChange(state, step);
            }
        }, [state]);

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
