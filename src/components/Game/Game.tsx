/* eslint-disable react/no-array-index-key */
import React, {useMemo, useState} from "react";
import GameCell from "src/components/Game/GameCell";
import Step from "src/components/Step";
import useWinsContext from "src/context/WinsContext";
import detectWinCombination from "src/lib/detectWinCombination";
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

    const {winner, combination} = useMemo(() => {
        const result = detectWinCombination(state);
        setWinner(result.winner);
        return result;
    }, [state]);

    function toggleStep() {
        setStep((prevState) =>
            prevState === GameStep.x ? GameStep.o : GameStep.x,
        );
    }

    function onCellClick(rowIndex: number, cellIndex: number) {
        if (winner) return;
        setState((prevState) => {
            prevState[rowIndex][cellIndex] = step;
            return [...prevState];
        });
        toggleStep();
    }

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
        </GameWrapper>
    );
};

export default Game;
