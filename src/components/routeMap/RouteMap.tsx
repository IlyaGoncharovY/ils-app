import React from 'react';
import {MapContainer, Marker, Polyline, TileLayer, useMap} from 'react-leaflet';
import {latLng, latLngBounds, LatLngBoundsExpression, LatLngExpression, LatLngTuple} from 'leaflet';
import {RouteData} from "../table/TableForCoordinates";

interface IRouteMap {
    selectedRoute: RouteData | null
}

export const RouteMap: React.FC<IRouteMap> = ({ selectedRoute }) => {
    const defaultLatLng: LatLngTuple = [59.84660399, 30.29496392]
    const zoom: number = 13

    const routeCoords: LatLngTuple[] | null =
        selectedRoute && selectedRoute.key
            ? [
                selectedRoute.point1.split(',').map((coord) => parseFloat(coord.trim())) as LatLngTuple,
                selectedRoute.point2.split(',').map((coord) => parseFloat(coord.trim())) as LatLngTuple,
                selectedRoute.point3.split(',').map((coord) => parseFloat(coord.trim())) as LatLngTuple,
            ]
            : null

    const routeStyle = {
        color: 'blue',
        weight: 2,
    }

    const AdjustMapView = () => {
        const map = useMap()
        if (routeCoords && routeCoords.length > 0) {
            const bounds = latLngBounds(routeCoords[0], routeCoords[0])
            routeCoords.forEach((coord) => bounds.extend(latLng(coord)))
            map.fitBounds(bounds as LatLngBoundsExpression)
        } else {
            map.setView(defaultLatLng, zoom)
        }
        return null
    }

    return (
        <div>
            <MapContainer
                id="mapId"
                center={defaultLatLng}
                zoom={zoom}
                style={{ height: '100vh', width: '100vw' }}
            >
                <AdjustMapView/>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {routeCoords && <Polyline positions={routeCoords} pathOptions={routeStyle} />}
                {routeCoords &&
                    routeCoords.map((coords, index) => (
                        <Marker key={index} position={coords as LatLngExpression}>
                           marker
                        </Marker>
                    ))}
            </MapContainer>
        </div>
    );
};

