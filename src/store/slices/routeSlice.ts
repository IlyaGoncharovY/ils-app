import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RouteDataType} from "../../common/data-set";
import {ResponseDataType, routerAPI} from "../../api/api";
import {put} from "redux-saga/effects";

interface initialStateType {
    selectedRoute: ResponseDataType | null
}

const initialState: initialStateType = {
    selectedRoute: null
}

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

const routeSlice = createSlice({
    name: "SELECTED_ROUTES",
    initialState,
    reducers: {
        getRouteSuccess: (state, action: PayloadAction<ResponseDataType | null>) => {
            state.selectedRoute = action.payload
        }
    }
})

export const GET_ROUTS = "/getRouts"
export const getRoutsAC = createAction<RouteDataType | null>(GET_ROUTS)

export const {getRouteSuccess} = routeSlice.actions
export default routeSlice.reducer