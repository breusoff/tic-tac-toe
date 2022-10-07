import React, {FC} from "react";
import OIcon from "src/assets/icons/OIcon";
import XIcon from "src/assets/icons/XIcon";
import {IGameCellState} from "src/components/Game/GameCell/IGameCellState";
import {GameCellO, GameCellWrapper, GameCellX} from "./GameCell.styles";

interface IGameCellProps {
    cell?: IGameCellState;
    win?: boolean;
}

const GameCell: FC<IGameCellProps> = ({cell, win}) => {
    if (!cell) {
        return <GameCellWrapper />;
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
