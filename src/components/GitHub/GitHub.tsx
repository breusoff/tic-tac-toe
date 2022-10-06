import React from "react";
import {useTranslation} from "react-i18next";
import GitHubIcon from "src/assets/icons/GitHubIcon";
import {GitHubWrapper} from "./GitHub.styles";

const GITHUB_LINK = "https://github.com/breusoff";

const GitHub = () => {
    const {t} = useTranslation();

    return (
        <GitHubWrapper href={GITHUB_LINK} target="_blank">
            <GitHubIcon />
            <span>{t("github")}</span>
        </GitHubWrapper>
    );
};

export default GitHub;
