/* eslint-disable react/no-array-index-key */
import React, {useState} from "react";
import GameCell from "src/components/Game/GameCell";
import Step from "src/components/Step";
import {IGameCellState} from "src/interfaces/IGameCellState";
import {IGameStep} from "src/interfaces/IGameStep";
import {GameGrid, GameRaw, GameWrapper} from "./Game.styles";

const defaultState: IGameCellState[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const Game = () => {
    const [state, setState] = useState<IGameCellState[][]>(defaultState);
    const [step, setStep] = useState<IGameStep>("x");

    function toggleStep() {
        setStep((prevState) => (prevState === "x" ? "o" : "x"));
    }

    function onCellClick(rawIndex: number, cellIndex: number) {
        setState((prevState) => {
            prevState[rawIndex][cellIndex] = step;
            return [...prevState];
        });
        toggleStep();
    }

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
