import {createAction} from "@reduxjs/toolkit";
import {RouteDataType} from "../../../common/commonType";

export const GET_ROUTS = "/getRouts"
export const getRoutsAC = createAction<RouteDataType | null>(GET_ROUTS)