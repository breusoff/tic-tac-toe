/* eslint-disable react/no-array-index-key */
import React, {useState} from "react";
import GameCell from "src/components/Game/GameCell";
import Step from "src/components/Step";
import {GameStep} from "src/interfaces/GameStep";
import {IGameCellState} from "src/interfaces/IGameCellState";
import {GameGrid, GameRaw, GameWrapper} from "./Game.styles";

const defaultState: IGameCellState[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const Game = () => {
    const [state, setState] = useState<IGameCellState[][]>(defaultState);
    const [step, setStep] = useState<GameStep>(GameStep.x);

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
