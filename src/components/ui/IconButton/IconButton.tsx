import React, {FC, PropsWithChildren} from "react";
import {EmptyCallback} from "src/types/EmptyCallback";
import {IconButtonWrapper} from "./IconButton.styles";

interface IIconButtonProps {
    onClick?: EmptyCallback;
}

const IconButton: FC<PropsWithChildren<IIconButtonProps>> = ({
    children,
    onClick,
}) => {
    return <IconButtonWrapper onClick={onClick}>{children}</IconButtonWrapper>;
};

export default IconButton;
