import React from 'react';
/* eslint-disable i18next/no-literal-string */
import {
    BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

interface Props{
    className?: string;
}
const data = [
    {
        name: 'Алматы',
        uv: 15000000,
    },
    {
        name: 'Астана',
        uv: 14256875,
    },
    {
        name: 'Караганда',
        uv: 9365754,
    },
    {
        name: 'Атырау',
        uv: 1600000,
    },
    {
        name: 'Актобе',
        uv: 10000000,
    },
    {
        name: 'Актау',
        uv: 12000000,
    },
    {
        name: 'Кызылорда',
        uv: 14235687,
    },
    {
        name: 'Шымкент',
        uv: 7456896,
    },
];

const customXAxisTickFormatter = (value:number) => {
    if (value === 0) {
        return String(value);
    }
    // Format the value in millions with a short representation
    const formattedValue = value / 1000000; // Convert to millions
    return `${formattedValue.toFixed(0)}млн`; // Format to one decimal place and add 'M'
};

export const BarChart2 = (props:Props) => {
    const { className } = props;

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart
                    layout="vertical"
                    data={data}
                    margin={{ left: 40 }}
                >
                    <XAxis
                        strokeWidth={0}
                        type="number"
                        domain={['auto', 'auto']}
                        tickFormatter={customXAxisTickFormatter}
                    />
                    <YAxis
                        strokeWidth={0}
                        dataKey="name"
                        type="category"
                        width={80}
                        tick={{ }}
                    />
                    <Bar dataKey="uv" fill="#233D82" style={{ borderRadius: '0 2px 2px 0' }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
