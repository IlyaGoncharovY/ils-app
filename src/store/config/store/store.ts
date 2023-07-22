import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import routes from "../../slices/routeSlice"
import {GET_ROUTS} from "../../sagas/actionCreater/action";
import {getRouteSagaWorker} from "../../sagas/sagas";

const sagaMiddleware = createSagaMiddleware()

function* sagasWatcher() {
    yield takeEvery(GET_ROUTS, getRouteSagaWorker)
}

export const store = configureStore({
    reducer: {
        routes
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