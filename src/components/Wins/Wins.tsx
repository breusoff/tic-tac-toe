import React from "react";
import {useTheme} from "styled-components";
import OIcon from "src/assets/icons/OIcon";
import XIcon from "src/assets/icons/XIcon";
import useWinsContext from "src/context/WinsContext";
import {GameStep} from "src/types/GameStep";
import {WinWrapper} from "./Wins.styles";
import WinsItem from "./WinsItem";

const Wins = () => {
    const {cellX, cellO, color} = useTheme();
    const {wins} = useWinsContext();

    return (
        <WinWrapper>
            <WinsItem
                wins={wins[GameStep.x]}
                icon={<XIcon />}
                backgroundColor={cellX}
            />
            <WinsItem
                wins={wins.ties}
                icon={
                    <>
                        <XIcon />
                        <OIcon />
                    </>
                }
                backgroundColor={color}
            />
            <WinsItem
                wins={wins[GameStep.o]}
                icon={<OIcon />}
                backgroundColor={cellO}
            />
        </WinWrapper>
    );
};

export default Wins;
