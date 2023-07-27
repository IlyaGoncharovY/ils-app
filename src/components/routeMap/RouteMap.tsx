import React from 'react';
import {LatLngTuple} from 'leaflet';
import {MapContainer, Marker, Polyline, Popup, TileLayer} from 'react-leaflet';

import {useRouteMap} from "../../utils/hooks/useRouteMap";
import {useAppSelector} from "../../store/config/hook/hook";

import s from "./RouteMap.module.scss"

const ZOOM_LEVEL = 10
const ROUTE_STYLE = {color: 'blue', weight: 3}
const CENTER_POSITION: LatLngTuple = [59.84660399, 30.29496392]

export const RouteMap = () => {

    const selectedRoute = useAppSelector(state => state.routes.selectedRoute)
    const {routeCoordinates, selectedRouteData, points} = useRouteMap(selectedRoute)

    return (
        <div>
            <MapContainer
                id="mapId"
                center={CENTER_POSITION}
                zoom={ZOOM_LEVEL}
                className={s.container}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {routeCoordinates && <Polyline positions={routeCoordinates} {...ROUTE_STYLE} />}
                {selectedRouteData &&
                    points?.map((point, index) => (
                        <Marker key={index} position={[point[0], point[1]]}>
                            <Popup>{`Point ${index + 1}`}</Popup>
                        </Marker>
                    ))}
            </MapContainer>
        </div>
    );
};

