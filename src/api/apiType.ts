/**
 * Common response type
 */
export type ResponseDataType = {
    code: string;
    /**
     * routes for polyline
     */
    routes: ResponseDataTypeRoutes[];
    /**
     * waypoints for polyline
     */
    waypoints: ResponseDataTypeWaypoints[];
}
export type ResponseDataTypeRoutesGeometry = {
    coordinates: [number, number][];
    type: string;
}
export type ResponseDataTypeRoutesLegsStepsGeometry = {
    coordinates: [number, number][];
    type: string;
}
export type ResponseDataTypeRoutesLegsStepsManeuver = {
    bearing_after: number;
    bearing_before: number;
    location: number[];
    modifier: string;
    type: string;
}
export type ResponseDataTypeRoutesLegsStepsIntersections = {
    out: number;
    entry: boolean[];
    bearings: number[];
    location: number[];
}
export type ResponseDataTypeRoutesLegsSteps = {
    geometry: ResponseDataTypeRoutesLegsStepsGeometry;
    maneuver: ResponseDataTypeRoutesLegsStepsManeuver;
    mode: string;
    driving_side: string;
    name: string;
    intersections: ResponseDataTypeRoutesLegsStepsIntersections[];
    weight: number;
    duration: number;
    distance: number;
}
export type ResponseDataTypeRoutesLegs = {
    steps: ResponseDataTypeRoutesLegsSteps[];
    summary: string;
    weight: number;
    duration: number;
    distance: number;
}
export type ResponseDataTypeRoutes = {
    geometry: ResponseDataTypeRoutesGeometry;
    legs: ResponseDataTypeRoutesLegs[];
    weight_name: string;
    weight: number;
    duration: number;
    distance: number;
}
export type ResponseDataTypeWaypoints = {
    hint: string;
    distance: number;
    name: string;
    location: number[];
}