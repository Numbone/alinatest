/* eslint-disable i18next/no-literal-string */
import {
    Area,
    AreaChart, CartesianGrid, ResponsiveContainer,
    Tooltip, TooltipProps, XAxis, YAxis,
} from 'recharts';
import {
    ValueType,
    NameType,
} from 'recharts/types/component/DefaultTooltipContent';
import cls from './LineChart.module.scss';

const data = [
    {
        name: '1',
        uv: 410,
        pv: 420,

    },
    {
        name: '2',
        uv: 456,
        pv: 432,

    },
    {
        name: '3',
        uv: 412,
        pv: 427,

    },
    {
        name: '4',
        uv: 457,
        pv: 459,

    },
    {
        name: '5',
        uv: 444,
        pv: 448,

    },
    {
        name: '6',
        uv: 445,
        pv: 459,

    },
    {
        name: '7',
        uv: 485,
        pv: 417,

    },
    {
        name: '8',
        uv: 414,
        pv: 422,

    },
    {
        name: '9',
        uv: 442,
        pv: 456,

    },
    {
        name: '10',
        uv: 445,
        pv: 448,

    },
    {
        name: '11',
        uv: 479,
        pv: 457,

    },
    {
        name: '12',
        uv: 453,
        pv: 448,

    },
    {
        name: '13',
        uv: 446,
        pv: 459,

    },
    {
        name: '14',
        uv: 485,
        pv: 417,

    },
    {
        name: '15',
        uv: 485,
        pv: 417,

    },
    {
        name: '16',
        uv: 485,
        pv: 417,

    },
    {
        name: '17',
        uv: 446,
        pv: 478,

    },
    {
        name: '18',
        uv: 415,
        pv: 420,

    },
    {
        name: '19',
        uv: 456,
        pv: 432,

    },
    {
        name: '20',
        uv: 442,
        pv: 427,

    },
    {
        name: '21',
        uv: 447,
        pv: 459,

    },
    {
        name: '22',
        uv: 444,
        pv: 476,

    },
    {
        name: '23',
        uv: 467,
        pv: 455,

    },
    {
        name: '24',
        uv: 444,
        pv: 417,

    },
    {
        name: '25',
        uv: 416,
        pv: 426,

    },
    {
        name: '26',
        uv: 456,
        pv: 432,

    },
    {
        name: '27',
        uv: 422,
        pv: 427,

    },
    {
        name: '28',
        uv: 457,
        pv: 447,

    },
    {
        name: '29',
        uv: 445,
        pv: 448,

    },
    {
        name: '30',
        uv: 445,
        pv: 459,

    },

];

const CustomTooltip = ({
    active,
    payload,
    label,
}: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
        return (
            <div key={label} className={cls.tooltip_content}>
                <div className={cls.date}>
                    {label}
                    .02.2023
                </div>
                <div className={cls.wrapper}>
                    <div className={cls.flex}>
                        <div className={cls.green}>
                            покупка
                        </div>
                        <div className={cls.price}>
                            {payload?.[0].value}
                            ₸
                        </div>
                    </div>
                    <div className={cls.flex}>
                        <div className={cls.currency}>
                            $
                        </div>
                    </div>
                    <div className={cls.flex}>
                        <div className={cls.red}>
                            продажа
                        </div>
                        <div className={cls.price}>
                            {payload?.[1].value}
                            ₸
                        </div>
                    </div>
                </div>

                {/* <p className="label">{`${label} : ${payload?.[0].value}`}</p>
                <p className="desc">Anything you want can be displayed here.</p> */}
            </div>
        );
    }

    return null;
};

const customYAxisTickFormatter = (value:any, index:number) => {
    if (index === 0) {
        return '';
    }
    return value;
};
export const LineChart2 = () => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={data}

                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#A5B7E9" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#233D82" stopOpacity={0.1} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#D7EDFF" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#233D82" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="name"
                        strokeWidth={0}
                        allowDataOverflow
                    />
                    <YAxis
                        domain={['dataMin', 'auto']}
                        strokeWidth={0}
                        allowDataOverflow
                        tickFormatter={customYAxisTickFormatter}
                        tickCount={7}
                    />

                    <CartesianGrid
                        strokeDasharray="15 15"
                        verticalCoordinatesGenerator={(props) => []}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="uv" stroke="#C63131" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#00C366" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
