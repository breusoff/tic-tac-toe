/* eslint-disable react/no-array-index-key */
import React from "react";
import GameCell from "src/components/Game/GameCell";
import {IGameCellState} from "src/components/Game/GameCell/IGameCellState";
import {GameRaw, GameWrapper} from "./Game.styles";

const state: IGameCellState[][] = [
    ["x", null, "o"],
    [null, "x", null],
    ["o", null, "x"],
];

const Game = () => {
    return (
        <GameWrapper>
            {state.map((raw, rawIndex) => (
                <GameRaw key={rawIndex}>
                    {raw.map((cell, cellIndex) => (
                        <GameCell
                            key={cellIndex}
                            cell={cell}
                            win={cellIndex === 0}
                        />
                    ))}
                </GameRaw>
            ))}
        </GameWrapper>
    );
};

export default Game;
