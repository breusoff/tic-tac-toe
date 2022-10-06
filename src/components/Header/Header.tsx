import React, {FC} from "react";
import {Link, useNavigate} from "react-router-dom";
import ArrowIcon from "src/assets/icons/ArrowIcon";
import SettingsIcon from "src/assets/icons/SettingsIcon";
import IconButton from "src/components/ui/IconButton";
import routes from "src/routes";
import {HeaderWrapper} from "./Header.styles";

interface IHeaderProps {
    title?: string;
    backButton?: boolean;
    settingsButton?: boolean;
}

const BackButton = () => {
    const navigate = useNavigate();

    function onClick() {
        navigate(-1);
    }

    return (
        <IconButton onClick={onClick}>
            <ArrowIcon />
        </IconButton>
    );
};

const SettingsButton = () => {
    return (
        <Link to={routes.settings.url()}>
            <IconButton>
                <SettingsIcon />
            </IconButton>
        </Link>
    );
};

const Header: FC<IHeaderProps> = ({title = "", backButton, settingsButton}) => {
    return (
        <HeaderWrapper>
            {backButton ? <BackButton /> : <div />}
            {title}
            {settingsButton ? <SettingsButton /> : <div />}
        </HeaderWrapper>
    );
};

export default Header;
