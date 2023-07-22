import {PayloadAction} from "@reduxjs/toolkit";
import {RouteDataType} from "../../common/data-set";
import {ResponseDataType, routerAPI} from "../../api/api";
import {put} from "redux-saga/effects";
import {getRouteSuccess} from "../slices/routeSlice";

export function* getRouteSagaWorker(action: PayloadAction<RouteDataType>): any {
    try {
        const res: ResponseDataType = yield routerAPI.getRoute(action.payload)
        const payload = res
        yield put(getRouteSuccess(payload))
        console.log(payload)
    } catch (e) {
        console.log(e)
    }
}