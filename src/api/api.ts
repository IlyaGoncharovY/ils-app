import {PATH} from "../common/PATH";
import {ResponseDataType} from "./apiType";
import {RouteDataType} from "../common/commonType";

export const routerAPI = {
	getRoute(routeObj: RouteDataType): Promise<ResponseDataType> {
		const point1 = routeObj.point1.reverse()
		const point2 = routeObj.point2.reverse()
		const point3 = routeObj.point3.reverse()
		return fetch(
			`${PATH.BASE_URL}${point1};${point2};${point3}?steps=true&geometries=geojson&overview=full`,
		).then((res) => res.json())
	}
}