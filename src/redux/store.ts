import {configureStore} from "@reduxjs/toolkit";
import settings from "src/redux/entities/settings/settingsSlice";
import wins from "src/redux/entities/wins/winsSlice";

export const store = configureStore({
    reducer: {
        settings,
        wins,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
