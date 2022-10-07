import {useState} from "react";

const useBooleanState = (defaultValue = false) => {
    const [value, setValue] = useState(defaultValue);

    function setTrue() {
        setValue(true);
    }

    function setFalse() {
        setValue(false);
    }

    function toggle() {
        setValue(!value);
    }

    return {value, setTrue, setFalse, toggle};
};

export default useBooleanState;
