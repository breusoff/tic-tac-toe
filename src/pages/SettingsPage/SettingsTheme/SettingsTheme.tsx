import React, {useMemo} from "react";
import {useTranslation} from "react-i18next";
import Card from "src/components/ui/Card";
import Switch from "src/components/ui/Switch";
import {ISwitchOption} from "src/components/ui/Switch/ISwitchOption";
import {ThemesNames} from "src/styles/Theme.styles";
import {useThemeContext} from "src/styles/ThemeContext";

const SettingsTheme = () => {
    const {t} = useTranslation();
    const {themeName, setThemeName} = useThemeContext();

    const options: ISwitchOption<ThemesNames>[] = useMemo(() => {
        return [
            {
                label: t(`settings.theme.themes.${ThemesNames.dark}`),
                value: ThemesNames.dark,
            },
            {
                label: t(`settings.theme.themes.${ThemesNames.light}`),
                value: ThemesNames.light,
            },
        ];
    }, [t]);

    function onChange(newTheme: string) {
        setThemeName(newTheme as ThemesNames);
    }

    return (
        <Card title={t("settings.theme.title")}>
            <Switch options={options} value={themeName} onChange={onChange} />
        </Card>
    );
};

export default SettingsTheme;
