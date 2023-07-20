import React from 'react';
import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet';
import {LatLngExpression, LatLngTuple} from 'leaflet';
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

    return (
        <div>
            <MapContainer
                id="mapId"
                center={routeCoords ? routeCoords[0] : defaultLatLng}
                zoom={routeCoords ? zoom : zoom}
                style={{ height: '100vh', width: '100vw' }}
            >
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

