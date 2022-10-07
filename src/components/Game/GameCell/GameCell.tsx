import React, {FC} from "react";
import OIcon from "src/assets/icons/OIcon";
import XIcon from "src/assets/icons/XIcon";
import {IGameCellState} from "src/interfaces/IGameCellState";
import {EmptyCallback} from "src/types/EmptyCallback";
import {GameCellO, GameCellWrapper, GameCellX} from "./GameCell.styles";

interface IGameCellProps {
    cell?: IGameCellState;
    win?: boolean;
    onClick?: EmptyCallback;
}

const GameCell: FC<IGameCellProps> = ({cell, win, onClick}) => {
    if (!cell) {
        return <GameCellWrapper onClick={onClick} />;
    }

    if (cell === "x") {
        return (
            <GameCellX win={win}>
                <XIcon />
            </GameCellX>
        );
    }

    return (
        <GameCellO win={win}>
            <OIcon />
        </GameCellO>
    );
};

export default GameCell;
