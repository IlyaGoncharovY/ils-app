import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware()

function* sagasWatcher() {

}


export const store = configureStore({
    reducer: {

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});

sagaMiddleware.run(sagasWatcher)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;