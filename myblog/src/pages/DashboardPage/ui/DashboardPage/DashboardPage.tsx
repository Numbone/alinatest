import { memo } from 'react';
import { GraphMultiPart } from '@/features/graphMultiPart';
import { graphMultiPartReducer } from '@/features/graphMultiPart/model/slices/graphMultiPartSlice';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page/Page';
import cls from './DashboardPage.module.scss';

interface DashboardPageProps {
    className?: string;
}

const reducers: ReducersList = {
    graphMultiPart: graphMultiPartReducer,
};

export const DashboardPage = memo((props: DashboardPageProps) => {
    const { className } = props;

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.DashboardPage, {}, [className])}>
                <GraphMultiPart />
            </Page>
        </DynamicModuleLoader>
    );
});
