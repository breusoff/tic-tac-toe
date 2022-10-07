import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import RabbitIcon from "src/assets/icons/range/RabbitIcon";
import TurtleIcon from "src/assets/icons/range/TurtleIcon";
import Card from "src/components/ui/Card";
import SelectRange from "src/components/ui/SelectRange";

const SettingsAnimationDuration = () => {
    const {t} = useTranslation();

    const [value, setValue] = useState(0);

    return (
        <Card title={t("settings.animationDuration")}>
            <SelectRange
                minIcon={<TurtleIcon />}
                maxIcon={<RabbitIcon />}
                rangeProps={{
                    min: 0,
                    max: 1000,
                    steps: 5,
                    value,
                    onChange: setValue,
                }}
            />
        </Card>
    );
};

export default SettingsAnimationDuration;
