import React, {FC} from 'react';
import {Table} from 'antd';
import {columns, dataSource, RouteDataType} from "../../common/data-set";
import {useAppDispatch, useAppSelector} from "../../store/config/hook/hook";
import {getRoutsAC} from "../../store/slices/routeSlice";
import s from "./TableForCoordinates.module.css"

export const TableForCoordinates: FC = () => {

    const dispatch = useAppDispatch()

    const selectedRoute = useAppSelector(state => state.routes.selectedRoute)

    const handleRowSelection = (route: RouteDataType) => {
        dispatch(getRoutsAC(route))
    };

    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataSource}
                size="small"
                rowKey={(record) => record.key}
                onRow={(record) => ({
                    onClick: () => handleRowSelection(record),
                })}
                rowClassName={(record) =>
                    selectedRoute?.routes[0].geometry.coordinates[0][0] === record.point1[1]
                        ? s.selectedRow
                        : ''
                }
            />
        </div>
    )

};

