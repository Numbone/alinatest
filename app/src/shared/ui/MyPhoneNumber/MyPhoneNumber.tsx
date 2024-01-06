/* eslint-disable i18next/no-literal-string */
import React, { forwardRef, InputHTMLAttributes } from 'react';
import { InputMask } from '@react-input/mask';
import cls from './MyPhoneNumber.module.scss';

interface MyPhoneNumberProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const MyPhoneNumber = forwardRef<HTMLInputElement, MyPhoneNumberProps>((props, ref) => {
    const { label, ...inputProps } = props;
    return (
        <div className={cls.wrapper}>
            {label && <label className={cls.label}>{label}</label>}
            <InputMask mask="+7 (___) ___-__-__" replacement={{ _: /\d/ }} className={cls.input} {...inputProps} ref={ref} />
        </div>
    );
});

export { MyPhoneNumber };
