import {GameCellState} from "src/types/GameCellState";

export type GameState = GameCellState[][];

export const defaultState: GameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
