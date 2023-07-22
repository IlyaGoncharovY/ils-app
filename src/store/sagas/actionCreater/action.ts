import {createAction} from "@reduxjs/toolkit";
import {RouteDataType} from "../../../common/data-set";

export const GET_ROUTS = "/getRouts"
export const getRoutsAC = createAction<RouteDataType | null>(GET_ROUTS)