import React from 'react';
import {Table} from 'antd';

import {RouteDataType} from "../../common/commonType";
import {columns, dataSource} from "../../common/data-set";
import {getRoutsAC} from "../../store/saga/action/action";
import {useAppDispatch, useAppSelector} from "../../store/config/hook/hook";

import s from "./TableForCoordinates.module.scss"

export const TableForCoordinates = () => {

    const dispatch = useAppDispatch()
    const selectedRoute = useAppSelector(state => state.routes.selectedRoute)

    const handleRowSelection = (route: RouteDataType) => dispatch(getRoutsAC(route))

    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataSource}
                size="small"
                pagination={false}
                rowKey={(record) => record.key.toString()}
                onRow={(record) => ({
                    onClick: () => handleRowSelection(record)
                })}
                rowClassName={(record) =>
                    selectedRoute?.routes[0].geometry.coordinates[0][0] === record.point1[0] &&
                    selectedRoute?.routes[0].geometry.coordinates[0][1] === record.point1[1]
                        ? s.selectedRow
                        : ''
                }
            />
        </div>
    );
};

