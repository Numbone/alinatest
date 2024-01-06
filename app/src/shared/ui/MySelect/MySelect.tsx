import React, { forwardRef, SelectHTMLAttributes } from 'react';
import cls from './MySelect.module.scss';

interface Option {
  value: string;
  label: string;
}

interface MySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
}

const MySelect = forwardRef<HTMLSelectElement, MySelectProps>((props, ref) => {
    const { label, options, ...selectProps } = props;

    return (
        <div className={cls.wrapper}>
            {label && <label className={cls.label}>{label}</label>}
            <select className={cls.select} {...selectProps} ref={ref}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
});

export { MySelect };
