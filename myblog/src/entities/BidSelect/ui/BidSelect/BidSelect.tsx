import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BidSelect.module.scss';
import { BidSelectType } from '../../model/types/BidSchema';
import { ListBox } from '@/shared/ui/Popups';

interface BidSelectProps {
    className?: string;
    value?: BidSelectType;
    onChange?: (value: BidSelectType) => void;
    readonly?: boolean;
}

const options = [
    { value: BidSelectType.CLASSIC, content: BidSelectType.CLASSIC },
    { value: BidSelectType.NEW, content: BidSelectType.NEW },
];

export const BidSelect = memo(({
    className, value, onChange, readonly,
}: BidSelectProps) => {
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as BidSelectType);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            value={value}
            defaultValue="456"
            label="123"
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
    );
});
