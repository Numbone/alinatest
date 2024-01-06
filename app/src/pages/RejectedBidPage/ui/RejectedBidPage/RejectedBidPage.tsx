import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './RejectedBidPage.module.scss';
import { memo } from 'react';

interface RejectedBidPageProps {
    className?: string;
}

export const RejectedBidPage = memo((props: RejectedBidPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.RejectedBidPage, {}, [className])}>
           123
        </div>
    );
});