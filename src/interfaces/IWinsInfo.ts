import {GameStep} from "src/types/GameStep";

export interface IWinsInfo {
    [GameStep.x]: number;
    [GameStep.o]: number;
    ties: number;
}
