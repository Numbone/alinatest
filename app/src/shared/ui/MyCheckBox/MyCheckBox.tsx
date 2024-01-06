import React, { forwardRef, InputHTMLAttributes } from 'react';
import cls from './MyCheckBox.module.scss';

interface MyCheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const MyCheckBox = forwardRef<HTMLInputElement, MyCheckBoxProps>((props, ref) => {
    const { label, ...inputProps } = props;
    return (
        <div className={cls.wrapper}>
            <label className={cls.container}>
                <input type="checkbox" {...inputProps} ref={ref} />
                <span className={cls.checkmark} />
            </label>
            {label && <div className={cls.text}>{label}</div>}
        </div>
    );
});

export { MyCheckBox };
