/* eslint-disable react/no-array-index-key */
import React, {useState} from "react";
import GameCell from "src/components/Game/GameCell";
import {IGameCellState} from "src/components/Game/GameCell/IGameCellState";
import {GameRaw, GameWrapper} from "./Game.styles";

const defaultState: IGameCellState[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

type GameStep = "x" | "o";

const Game = () => {
    const [state, setState] = useState<IGameCellState[][]>(defaultState);
    const [step, setStep] = useState<GameStep>("x");

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
        </GameWrapper>
    );
};

export default Game;
