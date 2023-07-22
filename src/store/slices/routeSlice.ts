import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ResponseDataType} from "../../api/api";

interface initialStateType {
    selectedRoute: ResponseDataType | null
}

const initialState: initialStateType = {
    selectedRoute: null
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


export const {getRouteSuccess} = routeSlice.actions
export default routeSlice.reducer