import {takeEvery} from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";

import error from "../../slices/app/appSlice"
import routes from "../../slices/route/routeSlice"
import {GET_ROUTS} from "../../saga/action/action";
import {getRouteSagaWorker} from "../../saga/sagas";

const sagaMiddleware = createSagaMiddleware()

function* sagasWatcher() {
    yield takeEvery(GET_ROUTS, getRouteSagaWorker)
}

export const store = configureStore({
    reducer: {
        routes,
        error
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