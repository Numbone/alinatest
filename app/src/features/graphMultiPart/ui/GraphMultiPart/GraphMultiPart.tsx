import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { BarChart2, LineChart2, PieChart2 } from '@/entities/Chart';
import MultiBarChart from '@/entities/Chart/ui/MultiBarChart/MultiBarChart';
import { CurrencyType } from '@/shared/types';
import { DataTime } from '@/shared/types/data';
import { Card } from '@/shared/ui/Card/Card';
import { ListBox } from '@/shared/ui/Popups';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './GraphMultiPart.module.scss';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getDashboardPageGraphicBar,
    getDashboardPageGraphicLine,
    getDashboardPageGraphicMulti, getDashboardPageGraphicPie,
} from '../../model/selectors/graphic';
import { graphMultiPartActions } from '../../model/slices/graphMultiPartSlice';

interface GraphMultiPartProps {
    className?: string;
}

const optionsCurrency = [
    {
        value: CurrencyType.DOLLAR,
        content: CurrencyType.DOLLAR,
    },
    {
        value: CurrencyType.TENGE,
        content: CurrencyType.TENGE,
    },
    {
        value: CurrencyType.EURO,
        content: CurrencyType.EURO,
    },

];

const optionsDateTime = [
    {
        value: DataTime.YEAR,
        content: DataTime.YEAR,
    },
    {
        value: DataTime.MONTH,
        content: DataTime.MONTH,
    },
    {
        value: DataTime.DAY,
        content: DataTime.DAY,
    },

];

export const GraphMultiPart = memo((props: GraphMultiPartProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const line = useSelector(getDashboardPageGraphicLine);
    const bar = useSelector(getDashboardPageGraphicBar);
    const multi = useSelector(getDashboardPageGraphicMulti);
    const pie = useSelector(getDashboardPageGraphicPie);

    const onChangeCurrency = useCallback((value:string) => {
        dispatch(graphMultiPartActions.setDashboardLine(value as CurrencyType));
    }, [dispatch]);

    const onChangeBar = useCallback((value:string) => {
        dispatch(graphMultiPartActions.setDashboardBar(value as DataTime));
    }, [dispatch]);

    const onChangeMulti = useCallback((value:string) => {
        dispatch(graphMultiPartActions.setDashboardMulti(value as DataTime));
    }, [dispatch]);

    const onChangePie = useCallback((value:string) => {
        dispatch(graphMultiPartActions.setDashboardPie(value as DataTime));
    }, [dispatch]);

    return (
        <Card>
            <HStack className={cls.block} max justify="between">
                <div className={cls.text}>
                    {t('График курса валют')}
                </div>
                <ListBox
                    defaultValue={CurrencyType.DOLLAR}
                    another
                    onChange={onChangeCurrency}
                    items={optionsCurrency}
                    className={cls.left}
                    value={line}
                />
            </HStack>
            <LineChart2 />
            <div className={cls.content}>
                <VStack max>
                    <HStack className={cls.block} max justify="between">
                        <div className={cls.text}>
                            {t('Продажи по Казахстану')}
                        </div>
                        <ListBox
                            defaultValue={CurrencyType.DOLLAR}
                            another
                            onChange={onChangeBar}
                            items={optionsDateTime}
                            className={cls.left}
                            value={bar}
                        />
                    </HStack>
                    <BarChart2 />
                </VStack>
                <VStack max>
                    <HStack className={cls.block} max justify="between">
                        <div className={cls.text}>
                            {t('Статистика заявок')}
                        </div>
                        <ListBox
                            defaultValue={DataTime.YEAR}
                            another
                            onChange={onChangeMulti}
                            items={optionsDateTime}
                            className={cls.left}
                            value={multi}
                        />
                    </HStack>
                    <MultiBarChart />
                </VStack>
                <VStack max>
                    <HStack className={cls.block} max justify="between">
                        <div className={cls.text}>
                            {t('KPI')}
                        </div>
                        <ListBox
                            defaultValue={CurrencyType.DOLLAR}
                            another
                            onChange={onChangePie}
                            items={optionsDateTime}
                            className={cls.left}
                            value={pie}
                        />
                    </HStack>
                    <PieChart2 />
                </VStack>

            </div>
        </Card>
    );
});
