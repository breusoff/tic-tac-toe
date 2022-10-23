import {APP_STORAGE_NAME} from "src/data/appName";
import {IWinsInfo} from "src/interfaces/IWinsInfo";
import {GameStep} from "src/types/GameStep";

const WINS_STORAGE_NAME = `${APP_STORAGE_NAME}_WINS`;

export const defaultWins: IWinsInfo = {
    [GameStep.x]: 0,
    [GameStep.o]: 0,
    ties: 0,
};

const winsStorage = {
    get: (): IWinsInfo => {
        const wins = localStorage.getItem(WINS_STORAGE_NAME);
        if (!wins) return defaultWins;
        return JSON.parse(wins) as IWinsInfo;
    },
    set: (wins: IWinsInfo) => {
        localStorage.setItem(WINS_STORAGE_NAME, JSON.stringify(wins));
    },
};

export default winsStorage;
