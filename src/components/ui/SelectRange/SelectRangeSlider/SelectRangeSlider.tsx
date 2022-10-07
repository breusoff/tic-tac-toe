/* eslint-disable react/jsx-props-no-spreading */
import React, {FC, useMemo, useState} from "react";
import {Range} from "react-range";
import {ISelectRangeSlider} from "./ISelectRangeSlider";
import {
    SelectMark,
    SelectThumb,
    SelectTrack,
    SelectTrackWrapper,
} from "./SelectRangeSlider.styles";

const SelectRangeSlider: FC<ISelectRangeSlider> = ({
    steps = 1,
    value = 0,
    onChange,
    min = 0,
    max = 100,
}) => {
    const [values, setValues] = useState<number[]>([value]);
    const step = useMemo(() => max / steps, [steps]);

    function onChangeHandler(newValues: number[]) {
        setValues(newValues);
        onChange && onChange(newValues[0]);
    }

    return (
        <Range
            values={values}
            step={step}
            min={min}
            max={max}
            onChange={setValues}
            onFinalChange={onChangeHandler}
            renderMark={({props}) => <SelectMark {...props} />}
            renderTrack={({props, children}) => (
                <SelectTrackWrapper
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{...props.style}}
                >
                    <SelectTrack ref={props.ref}>{children}</SelectTrack>
                </SelectTrackWrapper>
            )}
            renderThumb={({props}) => <SelectThumb {...props} />}
        />
    );
};

export default SelectRangeSlider;
