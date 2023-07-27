import React, {useRef} from 'react';
import {createPortal} from "react-dom";
import {Layout} from 'antd';

import {RouteMap} from "./routeMap/RouteMap";
import {useAppSelector} from "../store/config/hook/hook";
import {ErrorMessage} from "../common/Components/ErrorMessage";
import {TableForCoordinates} from "./table/TableForCoordinates";

import s from "./App.module.scss";

const {Content} = Layout;

function App() {

    const portalRef = useRef(document.getElementById('error-portal'));
    const error = useAppSelector(state => state.error.error)

    return (
        <div className={s.appContainer}>
            <div className={s.tableColumn}>
                <TableForCoordinates/>
            </div>
            <div className={s.mapColumn}>
                <Content className={s.mapContent}>
                    <RouteMap/>
                </Content>
            </div>
            {portalRef.current && createPortal(
                error && (
                    <div className="modalContainer">
                        <div className="errorMessageContainer">
                            <ErrorMessage error={error}/>
                        </div>
                    </div>
                ),
                portalRef.current
            )}
        </div>
    );
}

export default App;
