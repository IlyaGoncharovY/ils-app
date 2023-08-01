import {PayloadAction} from "@reduxjs/toolkit";
import {put} from "redux-saga/effects";

import {routerAPI} from "../../api/api";
import {setError} from "../slices/app/appSlice";
import {ResponseDataType} from "../../api/apiType";
import {getRouteSuccess} from "../slices/route/routeSlice";
import {RouteDataType} from "../../common/commonType";

export function* getRouteSagaWorker(action: PayloadAction<RouteDataType>): any {
    try {
        const res: ResponseDataType = yield routerAPI.getRoute(action.payload)
        yield put(getRouteSuccess(res))
    } catch (e) {
        const error = e as Error;
        yield put(setError(error.message));
    }
}
