import routeReducer, { getRouteSuccess } from '../route/routeSlice';

describe('routeReducer', () => {
    const initialState = {
        selectedRoute: null,
    }

    it('should handle initial state', () => {
        expect(routeReducer(undefined, { type: 'unknown' })).toEqual(initialState)
    })

    it('should handle getRouteSuccess with null payload', () => {
        const action = getRouteSuccess(null)
        const expectedState = {
            selectedRoute: null,
        }
        expect(routeReducer(initialState, action)).toEqual(expectedState);
    })
})
