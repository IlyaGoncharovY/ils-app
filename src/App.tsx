import React, {useState} from 'react';
import './App.css';
import {RouteData, TableForCoordinates} from "./components/table/TableForCoordinates";
import {RouteMap} from "./components/routeMap/RouteMap";


function App() {

    const [selectedRoute, setSelectedRoute] = useState<RouteData | null>(null);

    const handleRouteSelection = (route: RouteData) => {
        setSelectedRoute(route);
    };

    return (
        <div>
            <TableForCoordinates  onRouteSelection={handleRouteSelection}
                                  selectedRoute={selectedRoute}/>
            <RouteMap selectedRoute={selectedRoute}/>
        </div>

    );
}

export default App;
