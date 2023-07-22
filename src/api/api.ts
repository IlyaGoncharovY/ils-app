import {RouteDataType} from "../common/data-set";
import {PATH} from "../common/PATH";

export const routerAPI = {
	getRoute(routeObj: RouteDataType): Promise<ResponseDataType> {
		const point1 = routeObj.point1.reverse()
		const point2 = routeObj.point2.reverse()
		const point3 = routeObj.point3.reverse()
		return fetch(
			`${PATH.BASE_URL}${point1};${point2};${point3}?steps=true&geometries=geojson&overview=full`,
		).then((res) => res.json())
	},
}

export type ResponseDataType = {
	code: string;
	routes: ResponseDataTypeRoutes[];
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