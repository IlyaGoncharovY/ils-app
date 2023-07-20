import React, {FC} from 'react';
import {Table} from 'antd';

export type RouteData = {
    key: string
    name: string
    point1: string
    point2: string
    point3: string
}

interface ITableForCoordinates {
    onRouteSelection: (route: RouteData) => void
    selectedRoute: RouteData | null
}

export const TableForCoordinates:FC<ITableForCoordinates> = ({onRouteSelection, selectedRoute}) => {

    const columns = [
        {
            title: 'Маршрут',
            dataIndex: 'name',
        },
        {
            title: 'Точка 1',
            dataIndex: 'point1',
        },
        {
            title: 'Точка 2',
            dataIndex: 'point2',
        },
        {
            title: 'Точка 3',
            dataIndex: 'point3',
        },
    ]

    const dataSource: RouteData[] = [
        {
            key: '1',
            name: 'Маршрут №1',
            point1: "59.84660399, 30.29496392",
            point2: "59.82934196, 30.42423701",
            point3: "59.83567701, 30.38064206",
        },
        {
            key: '2',
            name: 'Маршрут №2',
            point1: "59.82934196, 30.42423701",
            point2: "59.82761295, 30.41705607",
            point3: "59.84660399, 30.29496392",
        },
        {
            key: '3',
            name: 'Маршрут №3',
            point1: "59.83567701, 30.38064206",
            point2: "59.84660399, 30.29496392",
            point3: "59.82761295, 30.41705607",
        },
    ]

    const handleRowClick = (record: RouteData) => {
        onRouteSelection(record)
    }

    return (
        <div>
            <Table columns={columns}
                   dataSource={dataSource}
                   size="small"
                   onRow={(record) => ({
                       onClick: () => handleRowClick(record),
                       style: {
                           background: record.key === selectedRoute?.key ? 'lightblue' : 'white',
                       },
                   })}
            />
        </div>
    )

};

