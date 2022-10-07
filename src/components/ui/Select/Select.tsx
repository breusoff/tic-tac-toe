import React, {FC, useMemo} from "react";
import RSelect, {SingleValue} from "react-select";
import ArrowIcon from "src/assets/icons/ArrowIcon";
import {ISelectOption} from "src/components/ui/Select/ISelectOption";
import {SelectDropdownIndicator, SelectWrapper} from "./Select.styles";

interface ISelectProps {
    value?: string;
    options?: ISelectOption[];
    onChange?: (value?: string) => void;
}

const Select: FC<ISelectProps> = ({options = [], value, onChange}) => {
    const valueOption = useMemo(
        () => options?.find((i) => i.value === value),
        [value, options],
    );

    function onChangeHandler(newValue: SingleValue<ISelectOption>) {
        onChange && onChange(newValue?.value);
    }

    return (
        <SelectWrapper>
            <RSelect
                classNamePrefix="react-select"
                options={options}
                value={valueOption}
                onChange={onChangeHandler}
                components={{
                    DropdownIndicator: ({selectProps}) => {
                        return (
                            <SelectDropdownIndicator
                                opened={selectProps.menuIsOpen}
                            >
                                <ArrowIcon />
                            </SelectDropdownIndicator>
                        );
                    },
                }}
            />
        </SelectWrapper>
    );
};

export default Select;
