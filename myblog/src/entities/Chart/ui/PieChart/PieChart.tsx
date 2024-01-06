/* eslint-disable i18next/no-literal-string */
import React from 'react';
import {
    PieChart, Pie, Sector, Cell, ResponsiveContainer, Label, Legend,
} from 'recharts';
import cls from './PieChart.module.scss';

const data02 = [
    { name: 'A1', value: 63 },
    { name: 'A2', value: 37 },

];

const renderLabel = () => (
    <>
        <text x="50%" y="48%" textAnchor="middle" dominantBaseline="middle" fill="#233D82" fontSize={26}>
            63%
        </text>
        <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fill="#02BC63" fontSize={16}>
            &#x25B2; 2%
        </text>
    </>
);

export const PieChart2 = () => {
    const COLORS = ['#E9F5FF', '#233D82'];
    const maxEntry = data02.reduce((max, entry) => (entry.value > max.value ? entry : max), data02[0]);
    const minEntry = data02.reduce((min, entry) => (entry.value < min.value ? entry : min), data02[0]);

    return (
        <div style={{ width: '100%', height: 270 }}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data02}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
                        fill="#233D82"
                        labelLine={false}
                    >
                        {data02.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.value > 50 ? COLORS[1] : COLORS[0]} />
                        ))}
                        <Label position="center" content={renderLabel} />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className={cls.legend}>
                {' '}
                <p className={cls.icon}>&#x25B2;</p>
                {' '}
                прирост за день
            </div>
        </div>
    );
};
