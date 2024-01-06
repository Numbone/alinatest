import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Chart.module.scss';

interface ChartProps {
    className?: string;
}

export const Chart = memo((props: ChartProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Chart, {}, [className])} />
    );
});
