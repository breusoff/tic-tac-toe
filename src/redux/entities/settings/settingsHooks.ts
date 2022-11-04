import {
    setAnimationDuration,
    setBotComplexity,
} from "src/redux/entities/settings/settingsSlice";
import {useAppDispatch, useAppSelector} from "src/redux/hooks";

export const useSettings = () => {
    return useAppSelector((state) => state.settings);
};

export const useAnimationDuration = () => {
    return useAppSelector((state) => state.settings.animationDuration);
};

export const useBotComplexity = () => {
    return useAppSelector((state) => state.settings.botComplexity);
};

export const useSetAnimationDuration = () => {
    const dispatch = useAppDispatch();

    function set(newValue: number) {
        dispatch(setAnimationDuration(newValue));
    }

    return set;
};

export const useSetBotComplexity = () => {
    const dispatch = useAppDispatch();

    function set(newValue: number) {
        dispatch(setBotComplexity(newValue));
    }

    return set;
};
