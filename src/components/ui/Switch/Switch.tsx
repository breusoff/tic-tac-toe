import React, {FC} from "react";
import {ISwitchOption} from "./ISwitchOption";
import {SwitchItem, SwitchWrapper} from "./Switch.styles";

interface ISwitchProps<V = string> {
    value?: V;
    onChange?: (value: V) => void;
    options?: ISwitchOption<V>[];
}

const Switch: FC<ISwitchProps> = ({options = [], value, onChange}) => {
    return (
        <SwitchWrapper>
            {options?.map((i) => {
                function onItemClick() {
                    onChange && onChange(i.value);
                }

                return (
                    <SwitchItem
                        key={i.value}
                        active={value === i.value}
                        onClick={onItemClick}
                    >
                        {i.label}
                    </SwitchItem>
                );
            })}
        </SwitchWrapper>
    );
};

export default Switch;
