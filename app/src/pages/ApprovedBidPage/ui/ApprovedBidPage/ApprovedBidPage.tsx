import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ApprovedBidPage.module.scss';
import { memo } from 'react';

interface ApprovedBidPageProps {
    className?: string;
}

export const ApprovedBidPage = memo((props: ApprovedBidPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.ApprovedBidPage, {}, [className])}>
           123
        </div>
    );
});