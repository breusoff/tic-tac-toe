import React from "react";
import {useTheme} from "styled-components";
import OIcon from "src/assets/icons/OIcon";
import XIcon from "src/assets/icons/XIcon";
import {WinWrapper} from "./Wins.styles";
import WinsItem from "./WinsItem";

const Wins = () => {
    const {cellX, cellO, color} = useTheme();

    return (
        <WinWrapper>
            <WinsItem wins={0} icon={<XIcon />} backgroundColor={cellX} />
            <WinsItem
                wins={0}
                icon={
                    <>
                        <XIcon />
                        <OIcon />
                    </>
                }
                backgroundColor={color}
            />
            <WinsItem wins={0} icon={<OIcon />} backgroundColor={cellO} />
        </WinWrapper>
    );
};

export default Wins;
