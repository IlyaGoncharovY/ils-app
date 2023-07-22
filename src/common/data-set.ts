
export type RouteDataType = {
    key: string
    name: string
    point1: number[]
    point2: number[]
    point3: number[]
}

export const columns = [
    {
        title: 'Маршрут',
        dataIndex: 'name',
    },
    {
        title: 'Точка 1 (lat, lng)',
        dataIndex: 'point1',
    },
    {
        title: 'Точка 2 (lat, lng)',
        dataIndex: 'point2',
    },
    {
        title: 'Точка 3 (lat, lng)',
        dataIndex: 'point3',
    },
]

export const dataSource: RouteDataType[] = [
    {
        key: '0',
        name: 'Маршрут №1',
        point1: [59.84660399,30.29496392],
        point2: [59.82934196,30.42423701],
        point3: [59.83567701,30.38064206],
    },
    {
        key: '1',
        name: 'Маршрут №2',
        point1: [59.82934196,30.42423701],
        point2: [59.82761295,30.41705607],
        point3: [59.84660399,30.29496392],
    },
    {
        key: '2',
        name: 'Маршрут №3',
        point1: [59.83567701,30.38064206],
        point2: [59.84660399,30.29496392],
        point3: [59.82761295,30.41705607],
    },
]