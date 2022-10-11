/* eslint-disable react/no-array-index-key */
import React, {useEffect, useState} from "react";
import GameCell from "src/components/Game/GameCell";
import Step from "src/components/Step";
import detectWinCombination from "src/lib/detectWinCombination";
import {GameState} from "src/types/GameState";
import {GameStep} from "src/types/GameStep";
import {GameWinner} from "src/types/GameWinner";
import {GameGrid, GameRaw, GameWrapper} from "./Game.styles";

const defaultState: GameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const Game = () => {
    const [state, setState] = useState<GameState>(defaultState);
    const [step, setStep] = useState<GameStep>(GameStep.x);
    const [winner, setWinner] = useState<GameWinner>(null);

    function toggleStep() {
        setStep((prevState) =>
            prevState === GameStep.x ? GameStep.o : GameStep.x,
        );
    }

    function onCellClick(rawIndex: number, cellIndex: number) {
        setState((prevState) => {
            prevState[rawIndex][cellIndex] = step;
            return [...prevState];
        });
        toggleStep();
    }

    useEffect(() => {
        setWinner(detectWinCombination(state));
    }, [state]);

    console.log("winner", winner);

    return (
        <GameWrapper>
            <GameGrid>
                {state.map((raw, rawIndex) => (
                    <GameRaw key={rawIndex}>
                        {raw.map((cell, cellIndex) => {
                            function onClick() {
                                onCellClick(rawIndex, cellIndex);
                            }

                            return (
                                <GameCell
                                    key={cellIndex}
                                    cell={cell}
                                    onClick={onClick}
                                />
                            );
                        })}
                    </GameRaw>
                ))}
            </GameGrid>
            <Step step={step} />
        </GameWrapper>
    );
};

export default Game;
