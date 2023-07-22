import React, {FC} from 'react';
import {MapContainer, Marker, Polyline, TileLayer} from 'react-leaflet';
import {LatLngTuple} from 'leaflet';
import {useAppSelector} from "../../store/config/hook/hook";


export const RouteMap: FC = () => {


    const selectedRoute = useAppSelector(state => state.routes.selectedRoute)
    const routeStyle = {
        color: 'blue',
        weight: 3,
    }

    const routeCoordinates: LatLngTuple[] | null =
        selectedRoute &&
        selectedRoute.routes[0].geometry.coordinates.map((coord: number[]) => [coord[1], coord[0]])

    // useEffect(() => {
    //     console.log('Selected Route:', selectedRoute)
    //     console.log('Route Coordinates:', routeCoordinates)
    // }, [selectedRoute, routeCoordinates])

    const initialPosition = selectedRoute && routeCoordinates && routeCoordinates[0]
    const defaultLatLng: LatLngTuple = initialPosition || [59.84660399, 30.29496392]

    const centerPosition: LatLngTuple = initialPosition || defaultLatLng
    const zoomLevel = 13

    return (
        <div>
            <MapContainer
                id="mapId"
                center={centerPosition}
                zoom={zoomLevel}
                style={{ height: '100vh', width: '100vw' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />

                {routeCoordinates && <Polyline positions={routeCoordinates} {...routeStyle} />}

                {selectedRoute &&
                    selectedRoute.routes[0].legs[0].steps.map((step, index) => (
                        <Marker
                            key={index}
                            position={[step.maneuver.location[1], step.maneuver.location[0]]}
                        />
                    ))}
            </MapContainer>
        </div>
    );
};

