
// Date: Sun, 24 Sep 2023
// Author: LafTools Team <work7z@outlook.com>
// Description:
// Copyright (C) 2023 - Present, https://codegen.cc
// License: AGPLv3

// Date: Sun, 24 Sep 2023
// Author: LafTools Team <work7z@outlook.com>
// Description:
// Copyright (C) 2023 - Present, https://codegen.cc
// License: AGPLv3

import {
    PayloadAction,
    Store,
    configureStore,
    createAsyncThunk,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { combineReducers, createStore } from 'redux';
import _ from "lodash";

// import apiSlice from "./reducers/apiSlice";
import settingsSlice from "./reducers/settingsSlice";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { listenerMiddleware } from "./forgeMiddleware";
import apiSlice from "./reducers/apiSlice";
import MemorySlice from "./reducers/memorySlice";
import UsersSlice from "./reducers/userSlice";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import BigTextSlice from "./reducers/bigTextSlice";

const rootReducer = combineReducers({
    settings: settingsSlice.reducer,
    memory: MemorySlice.reducer,
    users: UsersSlice.reducer,
    bigtext: BigTextSlice.reducer
})

export const persistedReducer = persistReducer({
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    // whitelist: ['settings', 'users']
    whitelist: ['settings',]
}, rootReducer as any)


export const store = configureStore(({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
            .concat(listenerMiddleware.middleware)
            .concat(apiSlice.middleware) as any
    },
    enhancers: [],
}));

export let persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>;

