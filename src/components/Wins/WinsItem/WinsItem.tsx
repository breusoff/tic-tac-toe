import React, {FC, ReactNode} from "react";
import {WinItemWrapper} from "./WinsItem.styles";

interface IWinsItemProps {
    wins?: number;
    icon?: ReactNode;
    backgroundColor?: string;
}

const WinsItem: FC<IWinsItemProps> = ({wins, icon, backgroundColor}) => {
    return (
        <WinItemWrapper style={{backgroundColor}}>
            {/*<div>{label}</div>*/}
            <div>{icon}</div>
            <div>{wins}</div>
        </WinItemWrapper>
    );
};

export default WinsItem;
