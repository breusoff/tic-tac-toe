import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {IWinsInfo} from "src/interfaces/IWinsInfo";
import winsStorage from "src/lib/localStorage/winsStorage";
import {GameWinner} from "src/types/GameWinner";

const initialState: IWinsInfo = winsStorage.get();

export const settingsSlice = createSlice({
    name: "wins",
    initialState,
    reducers: {
        setWinner: (state, action: PayloadAction<GameWinner>) => {
            if (!action.payload) return state;

            const count = state[action.payload];
            const newState: IWinsInfo = {
                ...state,
                [action.payload]: count + 1,
            };

            winsStorage.set(newState);
            return newState;
        },
    },
});

export const {setWinner} = settingsSlice.actions;

export default settingsSlice.reducer;
