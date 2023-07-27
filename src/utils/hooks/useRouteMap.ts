import {useEffect, useRef} from "react";
import {LatLngBounds, LatLngTuple} from "leaflet";

import {dataSource} from "../../common/data-set";
import {ResponseDataType} from "../../api/apiType";
import {RouteDataType} from "../../common/commonType";

export const useRouteMap = (selectedRoute: ResponseDataType | null) => {

    const mapRef = useRef<any>(null)

    const routeCoordinates: LatLngTuple[] | null =
        selectedRoute &&
        selectedRoute.routes[0].geometry.coordinates.map((coord: number[]) => [coord[1], coord[0]])

    const selectedRouteData: RouteDataType | undefined | null =
        selectedRoute &&
        dataSource.find(
            (data) =>
                data.point1[0] === selectedRoute.waypoints[0].location[0] &&
                data.point1[1] === selectedRoute.waypoints[0].location[1]
        )

    const points = selectedRouteData && [
        selectedRouteData.point1,
        selectedRouteData.point2,
        selectedRouteData.point3
    ].map((point) => [point[1], point[0]])

    useEffect(() => {
        if (routeCoordinates && routeCoordinates.length > 1) {
            const bounds = new LatLngBounds(routeCoordinates)
            mapRef?.current?.leafletElement?.fitBounds(bounds)
        }
    }, [routeCoordinates])

    return {
        routeCoordinates, selectedRouteData, points
    }
}