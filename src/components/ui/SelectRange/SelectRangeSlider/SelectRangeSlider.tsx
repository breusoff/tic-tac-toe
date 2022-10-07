/* eslint-disable react/jsx-props-no-spreading */
import React, {FC, useMemo, useState} from "react";
import {Range} from "react-range";
import {
    SelectMark,
    SelectThumb,
    SelectTrack,
    SelectTrackWrapper,
} from "./SelectRangeSlider.styles";

const MIN = 0;
const MAX = 100;

interface ISelectRangeSlider {
    steps?: number;
}

const SelectRangeSlider: FC<ISelectRangeSlider> = ({steps = 1}) => {
    const [values, setValues] = useState<number[]>([0]);
    const step = useMemo(() => MAX / steps, [steps]);

    return (
        <Range
            values={values}
            step={step}
            min={MIN}
            max={MAX}
            onChange={setValues}
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
