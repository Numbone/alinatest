import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Input } from '@/shared/ui/Input/Input';
import { VStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';
import DropdownIcon from '@/shared/assets/icons/dropdown-icon.svg';
import DropdownPlus from '@/shared/assets/icons/dropdown_plus.svg';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
    another?:boolean;
}

export function ListBox(props: ListBoxProps) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
        another,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <VStack max gap="10">
            {label && <div className={cls.label}>{`${label}`}</div>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange as any}
            >
                <HListBox.Button disabled={readonly} className={!another ? cls.trigger : cls.trigger_another}>
                    {
                        !another
                            ? (
                                <div className={cls.wrapper}>

                                    <Input value={value ?? defaultValue} disabled={readonly} />
                                    <DropdownIcon />
                                </div>
                            )
                            : (
                                <>
                                    <Button theme={ButtonTheme.CLEAR} size={ButtonSize.S} disabled={readonly}>
                                        {value ?? defaultValue}
                                    </Button>
                                    <DropdownPlus />
                                </>
                            )
                    }

                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                        },
                                    )}
                                >
                                    {selected && '*'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </VStack>
    );
}
