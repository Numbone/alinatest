import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import { AddBidForm } from '@/features/addBidForm';
import { Page } from '@/widgets/Page/Page';
import cls from './NewBidPage.module.scss';

interface NewBidPageProps {
    className?: string;
}

export const NewBidPage = memo((props: NewBidPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.NewBidPage, {}, [className])}>
            <AddBidForm />
        </Page>
    );
});
