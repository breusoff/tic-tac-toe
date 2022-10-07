import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import BabyIcon from "src/assets/icons/range/BabyIcon";
import BotIcon from "src/assets/icons/range/BotIcon";
import Card from "src/components/ui/Card";
import SelectRange from "src/components/ui/SelectRange";

const SettingsBotComplexity = () => {
    const {t} = useTranslation();

    const [value, setValue] = useState(0);

    return (
        <Card title={t("settings.botComplexity")}>
            <SelectRange
                minIcon={<BabyIcon />}
                maxIcon={<BotIcon />}
                rangeProps={{
                    min: 0,
                    max: 400,
                    steps: 4,
                    value,
                    onChange: setValue,
                }}
            />
        </Card>
    );
};

export default SettingsBotComplexity;
