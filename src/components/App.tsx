import React from 'react';
import './App.css';
import {TableForCoordinates} from "./table/TableForCoordinates";
import {RouteMap} from "./routeMap/RouteMap";
import {Layout} from 'antd';

const {Content} = Layout;

function App() {


    return (
        <div className="App">
            <div className="table-column">
                <TableForCoordinates />
            </div>
            <div className="map-column">
                <Content style={{padding: '0 24px', minHeight: 280}}>
                    <RouteMap/>
                </Content>
            </div>
        </div>
    );
}

export default App;
