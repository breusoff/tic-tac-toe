import React, {FC, PropsWithChildren} from "react";
import {CardTitle, CardWrapper} from "./Card.styles";

interface ICardProps {
    title?: string;
}

const Card: FC<PropsWithChildren<ICardProps>> = ({title, children}) => {
    return (
        <CardWrapper>
            {title && <CardTitle>{title}</CardTitle>}
            {children}
        </CardWrapper>
    );
};

export default Card;
