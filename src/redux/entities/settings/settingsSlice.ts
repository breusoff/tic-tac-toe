import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import settingsStorage from "src/lib/localStorage/settingsStorage";

interface ISettingsState {
    animationDuration: number;
    botComplexity: number;
}

const initialState: ISettingsState = {
    animationDuration: settingsStorage.getAnimationDuration(),
    botComplexity: settingsStorage.getBotComplexity(),
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setAnimationDuration: (state, action: PayloadAction<number>) => {
            state.animationDuration = action.payload;
            settingsStorage.setAnimationDuration(action.payload);
        },
        setBotComplexity: (state, action: PayloadAction<number>) => {
            state.botComplexity = action.payload;
            settingsStorage.setBotComplexity(action.payload);
        },
    },
});

export const {setBotComplexity, setAnimationDuration} = settingsSlice.actions;

export default settingsSlice.reducer;
