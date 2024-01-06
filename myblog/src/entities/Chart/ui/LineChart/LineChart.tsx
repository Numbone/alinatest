/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-multi-spaces */
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ChartOptions,
    ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import cls from './LineChart.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LineChartProps {
    className?: string;
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

const getOrCreateTooltip = (chart:any) => {
    let tooltipEl = chart.canvas.parentNode.querySelector('div');

    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
        tooltipEl.style.borderRadius = '3px';
        tooltipEl.style.color = 'white';
        tooltipEl.style.opacity = 1;
        tooltipEl.style.pointerEvents = 'none';
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.transform = 'translate(-50%, 0)';
        tooltipEl.style.transition = 'all .1s ease';

        const table = document.createElement('table');
        table.style.margin = '0px';

        tooltipEl.appendChild(table);
        chart.canvas.parentNode.appendChild(tooltipEl);
    }

    return tooltipEl;
};

const externalTooltipHandler = (context:any) => {
    // Tooltip Element
    const { chart, tooltip } = context;
    const tooltipEl = getOrCreateTooltip(chart);

    // Hide if no tooltip
    if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
    }

    // Set Text
    if (tooltip.body) {
        const titleLines = tooltip.title || [];
        const bodyLines = tooltip.body.map((b:any) => b.lines);

        const tableHead = document.createElement('thead');

        titleLines.forEach((title:any) => {
            const tr = document.createElement('tr');
            // @ts-ignore
            tr.style.borderWidth = 0;

            const th = document.createElement('th');
            // @ts-ignore
            th.style.borderWidth = 0;
            const text = document.createTextNode(title);

            th.appendChild(text);
            tr.appendChild(th);
            tableHead.appendChild(tr);
        });

        const tableBody = document.createElement('tbody');
        // @ts-ignore
        bodyLines.forEach((body, i) => {
            const colors = tooltip.labelColors[i];

            const span = document.createElement('span');
            span.style.background = colors.backgroundColor;
            span.style.borderColor = colors.borderColor;
            span.style.borderWidth = '2px';
            span.style.marginRight = '10px';
            span.style.height = '10px';
            span.style.width = '10px';
            span.style.display = 'inline-block';

            const tr = document.createElement('tr');
            tr.style.backgroundColor = 'inherit';
            // @ts-ignore
            tr.style.borderWidth = 0;

            const td = document.createElement('td');
            // @ts-ignore
            td.style.borderWidth = 0;

            const text = document.createTextNode(body);

            td.appendChild(span);
            td.appendChild(text);
            tr.appendChild(td);
            tableBody.appendChild(tr);
        });

        const tableRoot = tooltipEl.querySelector('table');

        // Remove old children
        while (tableRoot.firstChild) {
            tableRoot.firstChild.remove();
        }

        // Add new children
        tableRoot.appendChild(tableHead);
        tableRoot.appendChild(tableBody);
    }

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = `${positionX + tooltip.caretX}px`;
    tooltipEl.style.top = `${positionY + tooltip.caretY}px`;
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding = `${tooltip.options.padding}px ${tooltip.options.padding}px`;
};

export const options: ChartOptions<'line'> = {
    responsive: true,
    aspectRatio: 5,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        tooltip: {
            enabled: false,
            position: 'nearest',
            external: externalTooltipHandler,
        },
    },

    scales: {
        x: {
            grid: {
                display: false,

            },
        },
        y: {
            max: 496,
            border: {
                dash: [15, 15],

            },
            grace: 10,
            ticks: {
                stepSize: 16,
            },

        },
    },

};

const labels = Array.from({ length: 30 }, (_, index) => index + 1);
const number1 = [465, 450, 446, 454, 448, 432, 430, 444, 432, 430, 447, 430, 432, 445, 448, 427, 420, 421, 418, 417, 419, 480, 425, 437, 440, 421, 423, 425, 437];
// eslint-disable-next-line max-len
const number2 = [466, 448, 452, 470, 464, 466, 472, 480, 474, 464, 450, 435, 437, 450, 448, 446, 448, 427, 423, 420, 423, 424, 425, 423, 425, 437, 440, 421, 439];
export const data:ChartData<'line'> = {
    labels,
    datasets: [
        {
            label: 'buy',
            data: number1,
            borderColor: '#C63131',
            backgroundColor: 'linear-gradient(0deg, #00C466, #00C466)',
            pointStyle: false,
            fill: {
                target: 'origin',
                above: '#A5B7E9B2',
                below: '',
            },
            tension: 0.6,
            borderWidth: 1,
        },
        {
            label: 'sell',
            data: number2,
            borderColor: '#00C366',
            backgroundColor: 'linear-gradient(0deg, #C63131, #C63131)',
            fill: {
                target: 'origin',
                above: '#D7EDFFB2',
                below: '',
            },
            tension: 0.6,
            pointStyle: false,
            borderWidth: 1,
        },
    ],
};

export const LineChart = memo((props: LineChartProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LineChart, {}, [className])}>
            <Line

                options={options}
                data={data}
            />
        </div>
    );
});
