import {APP_STORAGE_NAME} from "src/data/appName";

const ANIMATION_DURATION = `${APP_STORAGE_NAME}_SETTINGS_ANIMATION_DURATION`;
const BOT_COMPLEXITY = `${APP_STORAGE_NAME}_SETTINGS_BOT_COMPLEXITY`;

const settingsStorage = {
    getAnimationDuration: (): number => {
        return Number(localStorage.getItem(ANIMATION_DURATION));
    },
    setAnimationDuration: (value: number) => {
        localStorage.setItem(ANIMATION_DURATION, `${value}`);
    },
    getBotComplexity: (): number => {
        return Number(localStorage.getItem(BOT_COMPLEXITY));
    },
    setBotComplexity: (value: number) => {
        localStorage.setItem(BOT_COMPLEXITY, `${value}`);
    },
};

export default settingsStorage;
