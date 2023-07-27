import {RouteDataType} from "./commonType";

export const columns = [
    {
        title: 'Маршрут',
        dataIndex: 'name',
    },
    {
        title: 'Точка 1 (lat, lng)',
        dataIndex: 'point1',
        render: (point1: number[]) => `${point1[0]}, ${point1[1]}`,
    },
    {
        title: 'Точка 2 (lat, lng)',
        dataIndex: 'point2',
        render: (point2: number[]) => `${point2[0]}, ${point2[1]}`,
    },
    {
        title: 'Точка 3 (lat, lng)',
        dataIndex: 'point3',
        render: (point3: number[]) => `${point3[0]}, ${point3[1]}`,
    },
]

export const dataSource: RouteDataType[] = [
    {
        key: 0,
        name: 'Маршрут №1',
        point1: [59.847278, 30.295984],
        point2: [59.829426, 30.424154],
        point3: [59.835486, 30.380486],
    },
    {
        key: 1,
        name: 'Маршрут №2',
        point1: [59.829426, 30.424154],
        point2: [59.827618, 30.416829],
        point3: [59.847278, 30.295984],
    },
    {
        key: 2,
        name: 'Маршрут №3',
        point1: [59.835486, 30.380486],
        point2: [59.847278, 30.295984],
        point3: [59.827618, 30.416829],
    },
]