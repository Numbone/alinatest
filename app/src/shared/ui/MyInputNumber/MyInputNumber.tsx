import React, { forwardRef, InputHTMLAttributes } from 'react';
import cls from './MyInputNumber.module.scss';
import DownIcon from '@/shared/assets/icons/dropdown-icon.svg';
import UpIcon from '@/shared/assets/icons//dropdown-up.svg';

interface MyInputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    onClickUp?:()=>void;
    onCLickDown?:()=>void;
}

const MyInputNumber = forwardRef<HTMLInputElement, MyInputNumberProps>((props, ref) => {
    const {
        label, onCLickDown, onClickUp, ...inputProps
    } = props;
    return (
        <div className={cls.wrapper}>
            {label && <label className={cls.label}>{label}</label>}
            <div className={cls.flex}>
                <input type="number" className={cls.input} {...inputProps} ref={ref} />
                <div className={cls.flex_icon}>
                    <UpIcon onClick={onClickUp} />
                    <DownIcon onClick={onCLickDown} />
                </div>
            </div>
        </div>

    );
});

export { MyInputNumber };
