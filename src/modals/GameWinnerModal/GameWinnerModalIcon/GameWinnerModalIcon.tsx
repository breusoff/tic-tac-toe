import React, {FC} from "react";
import OIcon from "src/assets/icons/OIcon";
import XIcon from "src/assets/icons/XIcon";
import {GameStep} from "src/types/GameStep";
import {GameWinner} from "src/types/GameWinner";
import {
    GameWinnerIcon,
    GameWinnerOIcon,
    GameWinnerXIcon,
} from "../GameWinnerModal.styles";

interface IGameWinnerModalIconProps {
    winner: GameWinner;
}

const GameWinnerModalIcon: FC<IGameWinnerModalIconProps> = ({winner}) => {
    function Icon() {
        switch (winner) {
            case GameStep.x:
                return (
                    <GameWinnerXIcon>
                        <XIcon />
                    </GameWinnerXIcon>
                );
            case GameStep.o:
                return (
                    <GameWinnerOIcon>
                        <OIcon />
                    </GameWinnerOIcon>
                );
            case "ties":
                return (
                    <>
                        <GameWinnerXIcon>
                            <XIcon />
                        </GameWinnerXIcon>
                        <GameWinnerOIcon>
                            <OIcon />
                        </GameWinnerOIcon>
                    </>
                );
            default:
                return null;
        }
    }

    return (
        <GameWinnerIcon>
            <Icon />
        </GameWinnerIcon>
    );
};

export default GameWinnerModalIcon;
