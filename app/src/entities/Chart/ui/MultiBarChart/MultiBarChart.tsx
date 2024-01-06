/* eslint-disable i18next/no-literal-string */
import React from 'react';
import {
    BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import cls from './MultiBarChart.module.scss';

const data = [
    {
        name: 'кв. I',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'кв. II',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'кв. III',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'кв. IV',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },

];

const renderLegend = (props:any) => {
    const { payload } = props;
    const colors = ['#D73C4A', '#0016BE', '#E7BE34'];
    console.log(props);
    return (
        <ul className={cls.content}>
            {
                payload.map((entry:any, index:number) => (
                    <li className={cls.item} key={`item-${index}`}>
                        <div style={{ background: `${colors[index]}` }} className={cls.box} />
                        <div className={cls.text}>
                            {entry.value === 'pv' && ('закрытые - 345')}
                            {entry.value === 'uv' && ('новые - 420')}
                            {entry.value === 'amt' && ('текущие - 280')}
                        </div>

                    </li>
                ))
            }
        </ul>
    );
};
const MultiBarChart = () => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={419}
                    height={227}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis
                        strokeWidth={0}
                        dataKey="name"
                    />
                    <YAxis
                        strokeWidth={0}
                        hide
                    />
                    {/* <Tooltip /> */}
                    <Legend content={renderLegend} />
                    <Bar dataKey="pv" fill="#D73C4A" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="uv" fill="#0016BE" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    <Bar dataKey="amt" fill="#E7BE34" activeBar={<Rectangle fill="green" stroke="purple" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MultiBarChart;
