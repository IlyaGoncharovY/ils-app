import {PayloadAction} from "@reduxjs/toolkit";
import {put} from "redux-saga/effects";

import {routerAPI} from "../../api/api";
import {setError} from "../slices/appSlice";
import {ResponseDataType} from "../../api/apiType";
import {getRouteSuccess} from "../slices/routeSlice";
import {RouteDataType} from "../../common/commonType";

export function* getRouteSagaWorker(action: PayloadAction<RouteDataType>): any {
    try {
        const res: ResponseDataType = yield routerAPI.getRoute(action.payload)
        const payload = res
        yield put(getRouteSuccess(payload))
    } catch (e) {
        const error = e as Error;
        yield put(setError(error.message));
    }
}
