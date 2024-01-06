/* eslint-disable i18next/no-literal-string */
import React, { forwardRef, InputHTMLAttributes } from 'react';
import cls from './MyInput.module.scss';
import { HStack } from '../Stack';

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    width?: number;
    svg?: boolean;
}

const MyInput = forwardRef<HTMLInputElement, MyInputProps>((props, ref) => {
    const {
        label, width, svg, ...inputProps
    } = props;
    return (
        <div style={width ? { width: `${width}px` } : undefined} className={cls.wrapper}>
            {label && <label className={cls.label}>{label}</label>}
            <HStack max gap="4">
                <input className={cls.input} {...inputProps} ref={ref} />
                {svg && <div>₸</div>}
            </HStack>

        </div>
    );
});

export { MyInput };
