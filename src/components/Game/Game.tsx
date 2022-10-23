import React, {useEffect, useState} from "react";
import GameCell from "src/components/Game/GameCell";
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
import {GameGrid, GameRow, GameWrapper} from "./Game.styles";

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
            <GameGrid>
                {state.map((row, rowIndex) => (
                    <GameRow key={rowIndex}>
                        {row.map((cell, cellIndex) => {
                            function onClick() {
                                onCellClick(rowIndex, cellIndex);
                            }

                            const win = combination.some(
                                (i) => i[0] === rowIndex && i[1] === cellIndex,
                            );

                            return (
                                <GameCell
                                    key={cellIndex}
                                    cell={cell}
                                    onClick={onClick}
                                    win={win}
                                />
                            );
                        })}
                    </GameRow>
                ))}
            </GameGrid>
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
