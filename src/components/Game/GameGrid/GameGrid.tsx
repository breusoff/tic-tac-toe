import React, {FC} from "react";
import {GameState} from "src/types/GameState";
import {WinCombination} from "src/types/WinCombination";
import GameCell from "../GameCell";
import {GameGridWrapper as Grid, GameRow as Row} from "./GameGrid.styles";

interface IGameGridProps {
    state?: GameState;
    combination?: WinCombination;
    onCellClick?: (rowIndex: number, cellIndex: number) => void;
}

const GameGrid: FC<IGameGridProps> = ({
    state = [],
    combination = [],
    onCellClick,
}) => {
    return (
        <Grid>
            {state.map((row, rowIndex) => (
                <Row key={rowIndex}>
                    {row.map((cell, cellIndex) => {
                        function onClick() {
                            onCellClick && onCellClick(rowIndex, cellIndex);
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
                </Row>
            ))}
        </Grid>
    );
};

export default GameGrid;
